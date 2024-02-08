import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  employeeForm: FormGroup;
  employee: any = {};
  users: any;
  departments: any;
  first_name = "";
  last_name = "";
  contact = "";
  address = "";
  sex = "";
  department = "";


  constructor(private menuCtrl: MenuController, private modalController: ModalController, private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
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
    this.employeeForm.patchValue({
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      contact: this.employee.contact,
      address: this.employee.address,
      sex: this.employee.sex,
      department: this.employee.department,
      user: this.employee.user
    });

  };
  async editEmployee(employeeId: number) {
    const employeeData = this.employeeForm.value;
    console.log(employeeData)
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/employees/' + employeeId+'/', employeeData)
      .subscribe({
        next: () => {
          alert('Employee updated successfully.'); // Display success message
        },
        // error: (error: any) => {
        //   console.error('Error updating employee:', error); // Log the error response or message
        // },
      });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
