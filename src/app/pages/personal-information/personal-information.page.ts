import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  canSave = true;
  personalInformationForm: FormGroup;
  user: any = {};
  username = "";
  email = "";
  first_name = "";
  last_name = "";
  password = "";

  constructor(private authService: AuthService, private menuCtrl: MenuController, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder,private router: Router) { 

    this.personalInformationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // is_active: [false], // Default to false
      // is_superuser: [false], // Default to false
       // ... other form controls
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.personalInformationForm.patchValue({
      username: this.user.username,
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      password: this.user.password,
      // is_active: this.is_active,
      // is_superuser: this.is_superuser
    });
  }

  async editUser(userId: number) {
    
    const userData = this.personalInformationForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/users/' + userId + '/', userData)
      .subscribe({
        next: () => {
          alert('User updated successfully.'); // Display success message
        },
        // error: (error: any) => {
        //   console.error('Error updating employee:', error); // Log the error response or message
        // },
      });
  } 

}
