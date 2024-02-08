import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  taskForm: FormGroup;
  projects : any
  employees: any
  title="";
  status="";
  description="";
  project="";
  employee="";


  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { 

    this.http.get('https://dialarblack.pythonanywhere.com/employees/').subscribe(response => {
      this.employees = response
    });
    this.http.get('https://dialarblack.pythonanywhere.com/projects/').subscribe(response => {
      this.projects = response
    });

    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      employee: ['', Validators.required],
      project: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  get taskFormControls() {
    return this.taskForm.controls;
  }

  postTask() {
    const taskData={
      title:this.title,
      description:this.description,
      status:this.status,
      employee:this.employee,
      project:this.project,
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/tasks/', taskData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Task added successfully.'); // Display success message
        this.router.navigate(['/tasks']); // Navigate to the list of employees
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
