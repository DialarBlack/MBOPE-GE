import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { EditDepartmentPage } from '../edit-department/edit-department.page';
import { AddDepartmentPage } from '../add-department/add-department.page';
import {  MenuController } from '@ionic/angular';

interface Department {
  id: number;
  name: string;
  description: string;
}


@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {
  departments: any;
  searchQuery = "";
  filteredDepartments: any[]= [];
  showSuccessMessage: boolean = false;

  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, public alertController: AlertController,  public toastController: ToastController, private http: HttpClient) {
    this.http.get('https://dialarblack.pythonanywhere.com/departments/').subscribe(response => {
      this.departments = response
      this.filteredDepartments = this.departments;
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  filterDepartments() {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredDepartments = this.departments; // Reset filter if search query is empty
      return;
    }

    this.filteredDepartments = this.departments.filter(
      (department: Department) =>
        department.name.toLowerCase().includes(query) 
    );
  }

  async editDepartment(index: number) {
    
    const modal = await this.modalController.create({
      component: EditDepartmentPage,
      componentProps: {
        department: this.filteredDepartments[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }

  async addDepartment() {
    const modal = await this.modalController.create({
      component: AddDepartmentPage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }
  async deleteItem(departmentId: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this department?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/departments/' + departmentId)
          .subscribe({
            next: () => {
              this.showToast('Department deleted successfully');
              // Redirect to the desired page after deletion
              this.router.navigate(['/departments']);
            }
          });
         }
       }]
    });
   
    await alert.present();
   }
   
   async showToast(message: string) {
    const toast = await this.toastController.create({
       message: message,
       duration: 2000
    });
    toast.present();
   }

}
