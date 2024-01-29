import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees = [
    { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', username: '@jane.smith', email: 'jane@example.com', contact: '+987654321', address: '456 Elm St', sex: 'Female', department: 'Human Resources' },
    { id: 3, first_name: 'David', last_name: 'Johnson', username: '@david.johnson', email: 'david@example.com', contact: '+456789123', address: '789 Oak St', sex: 'Male', department: 'IT' },
    { id: 4, first_name: 'Emily', last_name: 'Davis', username: '@emily.davis', email: 'emily@example.com', contact: '+321987654', address: '987 Pine St', sex: 'Female', department: 'Marketing' },
    { id: 5, first_name: 'Michael', last_name: 'Wilson', username: '@michael.wilson', email: 'michael@example.com', contact: '+654321987', address: '654 Cedar St', sex: 'Male', department: 'Finance' }
  ];
  filteredEmployees = this.employees;
  searchTerm = '';
  showSuccessMessage: boolean = false;


  constructor(private router: Router, public alertController: AlertController,  public toastController: ToastController) { }

  ngOnInit() {
  }

  filterEmployees() {
    if (this.searchTerm.trim() !== '') {
      this.filteredEmployees = this.employees.filter(employee =>
        employee.first_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  editEmployee() {
    // Handle the edit functionality here
    console.log('Editing employee');
    this.router.navigate(['/edit-employee']);
  }

  addEmployee() {
    // Handle the add functionality here
    console.log('Adding a new employee');
    this.router.navigate(['/add-employee']);
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
           this.employees.splice(index, 1);
           this.showToast('Employee deleted successfully');
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
