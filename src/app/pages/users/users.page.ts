import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AddUserPage } from '../add-user/add-user.page';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditUserPage } from '../edit-user/edit-user.page';
import {  MenuController } from '@ionic/angular';


interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any;
  searchQuery = "";
  filteredUsers: any[]= [];
  showSuccessMessage: boolean = false;


  constructor(private menuCtrl: MenuController, private http: HttpClient, private modalController: ModalController, private router: Router, public alertController: AlertController,  public toastController: ToastController) { 
    this.http.get('https://dialarblack.pythonanywhere.com/users/').subscribe(response => {
      this.users = response
      this.filteredUsers = this.users;
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  filterUsers() {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredUsers = this.users; // Reset filter if search query is empty
      return;
    }

    this.filteredUsers = this.users.filter(
      (employee: User) =>
        employee.username.toLowerCase().includes(query)
    );
  }

  async editUser(index: number) {

    const modal = await this.modalController.create({
      component: EditUserPage,
      componentProps: {
        user: this.filteredUsers[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }

  

  async addUser() {
    const modal = await this.modalController.create({
      component: AddUserPage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }
  async deleteItem(userId: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this user?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/users/' + userId)
          .subscribe({
            next: () => {
              this.showToast('User deleted successfully');
              // Redirect to the desired page after deletion
              this.router.navigate(['/users']);
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
