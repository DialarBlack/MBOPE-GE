import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users = [
    { id: 1, username: '@john.doe', email: 'john@example.com', password: 'password', role: 'admin' },
    { id: 2, username: '@jane.smith', email: 'jane@example.com', password: 'password2', role: 'user' },
    { id: 3, username: '@john2.doe2', email: 'john2@example.com', password: 'password3', role: 'user' },
    { id: 4, username: '@jane2.smith2', email: 'jane2@example.com', password: 'password4', role: 'user' },
    { id: 5, username: '@jane3.smith2', email: 'jane3@example.com', password: 'password5', role: 'user' },
    // Add more users here
  ];

  filteredUsers = this.users;
  searchTerm = '';


  constructor(private router: Router, public alertController: AlertController,  public toastController: ToastController) { }

  ngOnInit() {
  }
  filterUsers() {
    if (this.searchTerm.trim() !== '') {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  editUser() {
    // Handle the edit functionality here
    console.log('edit a new user');
    this.router.navigate(['/edit-user']);
  }

  addUser() {
    // Handle the add functionality here
    console.log('Adding a new user');
    this.router.navigate(['/add-user']);
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
           this.users.splice(index, 1);
           this.showToast('User deleted successfully');
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
