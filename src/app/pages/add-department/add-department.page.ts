import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.page.html',
  styleUrls: ['./add-department.page.scss'],
})
export class AddDepartmentPage implements OnInit {
  departmentForm: FormGroup;
  name="";
  description="";

  constructor(private menuCtrl: MenuController, private router: Router, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder) { 
    this.departmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  get departmentFormControls() {
    return this.departmentForm.controls;
  }

  addDepartment() {
    const departmentData={
      name:this.name,
      description:this.description,
      
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/departments/', departmentData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Department added successfully.'); // Display success message
        this.router.navigate(['/departments']); // Navigate to the list of employees
        // Handle success
      },
      error: (error) => {
        console.log(error);
        // Handle error
      }
    });
}
async closeModal() {
  await this.modalController.dismiss();
}

}
