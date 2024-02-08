import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  userForm: FormGroup;
  username = "";
  email = "";
  password = "";

  constructor(private menuCtrl: MenuController, private router: Router, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  get userFormControls() {
    return this.userForm.controls;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  postUser() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      is_active: true,
      is_superuser: false
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/users/', userData).subscribe({
      next: (response) => {
        console.log(response);
        alert('User added successfully.'); // Display success message
        this.router.navigate(['/users']); // Navigate to the list of employees
        // Handle success
      },
      error: (error) => {
        console.log(error);
        // Handle error
      }
    });
  }

  // Add user logic here
}
