import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup

  constructor(private router: Router,public menuCtrl: MenuController, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
 }

 ionViewDidLeave() {
    this.menuCtrl.enable(true);
 }

  ngOnInit() {
  }
  register(){
    if (this.registerForm.invalid) {
      return;
    }else{
      this.router.navigate(['home']);
    }
    
  }

}
