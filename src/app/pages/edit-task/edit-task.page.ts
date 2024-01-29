import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  taskForm: FormGroup;
  task:any;

    employees = [
      { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' },
      { id: 2, first_name: 'Jane', last_name: 'Smith', username: '@jane.smith', email: 'jane@example.com', contact: '+987654321', address: '456 Elm St', sex: 'Female', department: 'Human Resources' },
      { id: 3, first_name: 'David', last_name: 'Johnson', username: '@david.johnson', email: 'david@example.com', contact: '+456789123', address: '789 Oak St', sex: 'Male', department: 'IT' },
      { id: 4, first_name: 'Emily', last_name: 'Davis', username: '@emily.davis', email: 'emily@example.com', contact: '+321987654', address: '987 Pine St', sex: 'Female', department: 'Marketing' },
      { id: 5, first_name: 'Michael', last_name: 'Wilson', username: '@michael.wilson', email: 'michael@example.com', contact: '+654321987', address: '654 Cedar St', sex: 'Male', department: 'Finance' }
    ];


  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.task = 
    {
      id: 1,
      title: "Complete Project Proposal",
      description: "Write a detailed project proposal including scope, objectives, and deliverables.",
      status: "In Progress",
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-02-15"),
      submittedDate: null,
      employee: "John Doe",
    };

    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      submittedDate: ['', Validators.required],
      employee: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  editTask() {
    if (this.taskForm.invalid) {
      return;
    }else{
      console.log('editing a task');
      this.router.navigate(['/tasks']);
    }
}
}
