import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {
  departments = [
    { id: 1, role_name: 'Sales', description: 'Responsible for driving sales and meeting revenue targets' },
    { id: 2, role_name: 'Human Resources', description: 'Responsible for employee recruitment, training, and welfare' },
    { id: 3, role_name: 'IT', description: 'Responsible for managing and maintaining the company\'s information technology infrastructure' },
    { id: 4, role_name: 'Marketing', description: 'Responsible for promoting the company\'s products and services' },
    { id: 5, role_name: 'Finance', description: 'Responsible for managing the company\'s financial activities and records' }
  ];

  filteredDepartments = this.departments;
  searchTerm = '';

  constructor(private router: Router, public alertController: AlertController,  public toastController: ToastController) { }

  ngOnInit() {
  }

  filterDepartments() {
    if (this.searchTerm.trim() !== '') {
      this.filteredDepartments = this.departments.filter(department =>
        department.role_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredDepartments = this.departments;
    }
  }

  editDepartment() {
    // Handle the edit functionality here
    console.log('Editing department');
    this.router.navigate(['/edit-department']);
  }

  addDepartment() {
    // Handle the add functionality here
    console.log('Adding a new department');
    this.router.navigate(['/add-department']);
  }
  async deleteItem(index: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this task?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
           this.departments.splice(index, 1);
           this.showToast('Department deleted successfully');
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
