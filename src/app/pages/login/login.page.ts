import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginPageForm } from "./login.page.form";
import { FormGroup } from '@angular/forms';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,public menuCtrl: MenuController) { 
    this.form = new LoginPageForm(this.formBuilder).createForm(); 
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
 }

 ionViewDidLeave() {
    this.menuCtrl.enable(true);
 }

  ngOnInit() { 
    
  }
  login(){
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['register']);
  }

}
