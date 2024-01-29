import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  userForm: FormGroup;
  user:any;
  

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.user = { id: 1, picture:'.../assets/icon/mbope logo.jpg', username: '@john.doe', email: 'john@example.com', password: 'password', role: 'admin'}

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  editUser() {
    if (this.userForm.invalid) {
      return;
    }else{
      console.log('editing a user');
    this.router.navigate(['/users']);
    }

    // Add user logic here
  }

}
