import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  username = "";
  email = "";
  password = "";

  constructor(private menuCtrl: MenuController, private router: Router, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { 
    this.menuCtrl.enable(false);
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  registerUser() {
    const registerData = {
      username: this.username,
      email: this.email,
      password: this.password,
      is_active: true,
      is_superuser: false
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/users/', registerData).subscribe({
      next: (response) => {
        console.log(response);
        alert('User registered successfully.'); // Display success message
        this.router.navigate(['/home']); // Navigate to the list of employees
        // Handle success
      },
      error: (error) => {
        console.log(error);
        // Handle error
      }
    });
  }
}
