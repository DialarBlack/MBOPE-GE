import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  employeeForm: FormGroup;
  departments = [
    { id: 1, role_name: 'Sales', description: 'Responsible for driving sales and meeting revenue targets' },
    { id: 2, role_name: 'Human Resources', description: 'Responsible for employee recruitment, training, and welfare' },
    { id: 3, role_name: 'IT', description: 'Responsible for managing and maintaining the company\'s information technology infrastructure' },
    { id: 4, role_name: 'Marketing', description: 'Responsible for promoting the company\'s products and services' },
    { id: 5, role_name: 'Finance', description: 'Responsible for managing the company\'s financial activities and records' }
  ];

  constructor(private formBuilder: FormBuilder) { 
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      sex: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  get employeeFormControls() {
    return this.employeeForm.controls;
  }

  addEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }

    const employee = {
      firstName: this.employeeFormControls['firstName'].value,
    lastName: this.employeeFormControls['lastName'].value,
    username: this.employeeFormControls['username'].value,
    email: this.employeeFormControls['email'].value,
    contact: this.employeeFormControls['contact'].value,
    address: this.employeeFormControls['address'].value,
    sex: this.employeeFormControls['sex'].value,
    department: this.employeeFormControls['department'].value,
    };

    // Add employee logic here
  }

}
