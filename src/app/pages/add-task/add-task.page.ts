import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  taskForm: FormGroup;
  employees = [
    { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', username: '@jane.smith', email: 'jane@example.com', contact: '+987654321', address: '456 Elm St', sex: 'Female', department: 'Human Resources' },
    { id: 3, first_name: 'David', last_name: 'Johnson', username: '@david.johnson', email: 'david@example.com', contact: '+456789123', address: '789 Oak St', sex: 'Male', department: 'IT' },
    { id: 4, first_name: 'Emily', last_name: 'Davis', username: '@emily.davis', email: 'emily@example.com', contact: '+321987654', address: '987 Pine St', sex: 'Female', department: 'Marketing' },
    { id: 5, first_name: 'Michael', last_name: 'Wilson', username: '@michael.wilson', email: 'michael@example.com', contact: '+654321987', address: '654 Cedar St', sex: 'Male', department: 'Finance' }
  ];


  constructor(private formBuilder: FormBuilder) { 
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      employee: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  get taskFormControls() {
    return this.taskForm.controls;
  }

  addTask() {
    if (this.taskForm.invalid) {
      return;
    }

    const task = {
      title: this.taskFormControls['title'].value,
      description: this.taskFormControls['description'].value,
      status: this.taskFormControls['status'].value,
      startDate: this.taskFormControls['startDate'].value,
      endDate: this.taskFormControls['endDate'].value,
      employee: this.taskFormControls['employee'].value,
    };

    // Add task logic here
  }

}
