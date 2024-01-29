import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.page.html',
  styleUrls: ['./add-department.page.scss'],
})
export class AddDepartmentPage implements OnInit {
  departmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.departmentForm = this.formBuilder.group({
      role_name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  get departmentFormControls() {
    return this.departmentForm.controls;
  }

  addDepartment() {
    if (this.departmentForm.invalid) {
      return;
    }

    const department = {
      role_name: this.departmentFormControls['role_name'].value,
      description: this.departmentFormControls['description'].value,
    };

    // Add department logic here
  }

}
