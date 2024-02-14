import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  canSave = true;
  userForm: FormGroup;
  user: any;
  // is_active: any;
  // is_superuser: any;

  constructor(private authService: AuthService, private menuCtrl: MenuController, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder,private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // is_active: [false], // Default to false
      // is_superuser: [false], // Default to false
       // ... other form controls
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.userForm.patchValue({
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      // is_active: this.is_active,
      // is_superuser: this.is_superuser
    });
    this.canSave = this.authService.getUserStatus(); 

  }

  async editUser(userId: number) {
    
    const userData = this.userForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/users/' + userId + '/', userData)
      .subscribe({
        next: () => {
          this.user=userData
          alert('User updated successfully.'); // Display success message

        },
        // error: (error: any) => {
        //   console.error('Error updating employee:', error); // Log the error response or message
        // },
      });
  } 
  async closeModal() {
    await this.modalController.dismiss();
  }

}
