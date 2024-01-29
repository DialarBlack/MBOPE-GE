import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() { 
  }

  get userFormControls() {
    return this.userForm.controls;
  }

  addUser() {
    if (this.userForm.invalid) {
      return;
    }

    const user = {
    username: this.userFormControls['username'].value,
    email: this.userFormControls['email'].value,
    password: this.userFormControls['password'].value,
    };

    // Add user logic here
  }

}
