// account-settings.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MenuController } from '@ionic/angular';

@Component({
 selector: 'app-account-settings',
 templateUrl: './account-settings.page.html',
 styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {
 accountSettingsForm: FormGroup;

 constructor(private fb: FormBuilder, private menuCtrl: MenuController) {
    this.accountSettingsForm = this.fb.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       // Add more fields as needed
    });
 }

 ngOnInit() {
   this.menuCtrl.enable(true);
 }

 submitForm() {
    if (this.accountSettingsForm.valid) {
      // Submit the form
      console.log(this.accountSettingsForm.value);
    }
 }
}
