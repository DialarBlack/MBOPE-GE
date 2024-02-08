import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.page.html',
  styleUrls: ['./edit-department.page.scss'],
})
export class EditDepartmentPage implements OnInit {

  departmentForm: FormGroup;
  department: any={};
  name = "";
  description = "";

  constructor(private menuCtrl: MenuController, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder,private router: Router) {
    this.departmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.departmentForm.patchValue({
      name: this.department.name,
      description: this.department.description,
    });
  }
  async editDepartment(departmentId: number) {
    
    const departmentData = this.departmentForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/departments/' + departmentId+'/', departmentData)
      .subscribe({
        next: () => {
          alert('Department updated successfully.'); // Display success message
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
