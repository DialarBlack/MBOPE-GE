import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.page.html',
  styleUrls: ['./add-attendance.page.scss'],
})
export class AddAttendancePage implements OnInit {
  attendanceForm: FormGroup;
  employees = [
    { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', username: '@jane.smith', email: 'jane@example.com', contact: '+987654321', address: '456 Elm St', sex: 'Female', department: 'Human Resources' },
    { id: 3, first_name: 'David', last_name: 'Johnson', username: '@david.johnson', email: 'david@example.com', contact: '+456789123', address: '789 Oak St', sex: 'Male', department: 'IT' },
    { id: 4, first_name: 'Emily', last_name: 'Davis', username: '@emily.davis', email: 'emily@example.com', contact: '+321987654', address: '987 Pine St', sex: 'Female', department: 'Marketing' },
    { id: 5, first_name: 'Michael', last_name: 'Wilson', username: '@michael.wilson', email: 'michael@example.com', contact: '+654321987', address: '654 Cedar St', sex: 'Male', department: 'Finance' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.attendanceForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      date: ['', Validators.required],
      arrivingTime: ['', Validators.required],
      startBreakTime: [''],
      endBreakTime: [''],
      leavingTime: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  get attendanceFormControls() {
    return this.attendanceForm.controls;
  }

  addAttendanceRecord() {
    if (this.attendanceForm.invalid) {
      return;
    }

    const attendanceRecord = {
      employeeName: this.attendanceFormControls['employeeName'].value,
      date: this.attendanceFormControls['date'].value,
      arrivingTime: this.attendanceFormControls['arrivingTime'].value,
      startBreakTime: this.attendanceFormControls['startBreakTime'].value,
      endBreakTime: this.attendanceFormControls['endBreakTime'].value,
      leavingTime: this.attendanceFormControls['leavingTime'].value,
    };

    // Add attendance record logic here
  }

}
