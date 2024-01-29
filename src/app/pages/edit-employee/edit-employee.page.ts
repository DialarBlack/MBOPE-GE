import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  employeeForm: FormGroup;
  employee:any;
  departments = [
    { id: 1, role_name: 'Sales', description: 'Responsible for driving sales and meeting revenue targets' },
    { id: 2, role_name: 'Human Resources', description: 'Responsible for employee recruitment, training, and welfare' },
    { id: 3, role_name: 'IT', description: 'Responsible for managing and maintaining the company\'s information technology infrastructure' },
    { id: 4, role_name: 'Marketing', description: 'Responsible for promoting the company\'s products and services' },
    { id: 5, role_name: 'Finance', description: 'Responsible for managing the company\'s financial activities and records' }
  ];

  
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.employee = 
    { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' };

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
editEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }else{
      console.log('editing an employee');
      this.router.navigate(['/employees']);
    }
}
}
