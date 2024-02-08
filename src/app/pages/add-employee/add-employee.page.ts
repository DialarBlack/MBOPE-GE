import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  employeeForm: FormGroup;
  departments : any
  users: any
  first_name="";
  last_name="";
  contact="";
  address="";
  sex="";
  department="";
  

  constructor(private menuCtrl: MenuController, private modalController: ModalController,private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { 
    this.http.get('https://dialarblack.pythonanywhere.com/users/').subscribe(response => {
      this.users = response
    });
    this.http.get('https://dialarblack.pythonanywhere.com/departments/').subscribe(response => {
      this.departments = response
    });
    this.employeeForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      sex: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  get employeeFormControls() {
    return this.employeeForm.controls;
  }

  postEmployee() {
    const employeeData={
      first_name:this.first_name,
      last_name:this.last_name,
      contact:this.contact,
      address:this.address,
      sex:this.sex,
      department:this.department,
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/employees/', employeeData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Employee added successfully.'); // Display success message
        this.router.navigate(['/employees']); // Navigate to the list of employees
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
