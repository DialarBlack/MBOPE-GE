import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.page.html',
  styleUrls: ['./edit-department.page.scss'],
})
export class EditDepartmentPage implements OnInit {

  departmentForm: FormGroup;
  department = { id: 4, role_name: 'Marketing', description: 'Responsible for promoting the company\'s products and services' };
    
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.departmentForm = this.formBuilder.group({
      role_name: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit() {

  }
  editDepartment() {
    if (this.departmentForm.invalid) {
      return;
    }else{
      console.log('editing a department');
      this.router.navigate(['/departments']);
    }
}
}
