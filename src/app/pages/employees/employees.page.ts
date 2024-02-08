import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AddEmployeePage } from '../add-employee/add-employee.page';
import { EditEmployeePage } from '../edit-employee/edit-employee.page';
import {  MenuController } from '@ionic/angular';


interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  contact: string;
  address: string,
  sex: string,
  department: number,
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees: any;
  searchQuery = "";
  filteredEmployees: any[]=[];
  showSuccessMessage: boolean = false;


  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, public alertController: AlertController, public toastController: ToastController, private http: HttpClient) {
    this.http.get('https://dialarblack.pythonanywhere.com/employees/').subscribe(response => {
      this.employees = response
      this.filteredEmployees = this.employees;
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  
  filterEmployees() {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredEmployees = this.employees; // Reset filter if search query is empty
      return;
    }

    this.filteredEmployees = this.employees.filter(
      (employee: Employee) =>
        employee.first_name.toLowerCase().includes(query) ||
        employee.last_name.toLowerCase().includes(query)
    );
  }

  async editEmployee(index: number) {

    const modal = await this.modalController.create({
      component: EditEmployeePage,
      componentProps: {
        employee: this.filteredEmployees[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async addEmployee() {
    const modal = await this.modalController.create({
      component: AddEmployeePage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }
 async deleteEmployee(employeeId: number) {
    const alert = await this.alertController.create({
      header: 'Confirm delete',
      message: 'Are you sure you want to delete this employee?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Delete cancelled');
        }
      }, {
        text: 'Delete',
        handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/employees/' + employeeId)
            .subscribe({
              next: () => {
                this.showToast('Employee deleted successfully');
                // Redirect to the desired page after deletion
                this.router.navigate(['/employees']);
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
