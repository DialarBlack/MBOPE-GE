import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  taskForm: FormGroup;
  task: any = {};
  employees: any;
  projects: any;
  title = "";
  description = "";
  status = "";
  project = "";
  employee = "";

  constructor(private menuCtrl: MenuController, private modalController: ModalController, private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {

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
      project: ['', Validators.required],
      employee: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.taskForm.patchValue({
      title:this.task.title,
      description:this.task.description,
      status:this.task.status,
      employee:this.task.employee,
      project:this.task.project,
    });
  }
  async editTask(taskId: number) {
    
    const taskData = this.taskForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/tasks/' + taskId+'/', taskData)
      .subscribe({
        next: () => {
          alert('Tasks updated successfully.'); // Display success message
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
