import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.page.html',
  styleUrls: ['./edit-attendance.page.scss'],
})
export class EditAttendancePage implements OnInit {

  attendanceForm:FormGroup;
  attendance:any;
  
  employees = [
    { id: 1, first_name: 'John', last_name: 'Doe', username: '@john.doe', email: 'john@example.com', contact: '+123456789', address: '123 Main St', sex: 'Male', department: 'Sales' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', username: '@jane.smith', email: 'jane@example.com', contact: '+987654321', address: '456 Elm St', sex: 'Female', department: 'Human Resources' },
    { id: 3, first_name: 'David', last_name: 'Johnson', username: '@david.johnson', email: 'david@example.com', contact: '+456789123', address: '789 Oak St', sex: 'Male', department: 'IT' },
    { id: 4, first_name: 'Emily', last_name: 'Davis', username: '@emily.davis', email: 'emily@example.com', contact: '+321987654', address: '987 Pine St', sex: 'Female', department: 'Marketing' },
    { id: 5, first_name: 'Michael', last_name: 'Wilson', username: '@michael.wilson', email: 'michael@example.com', contact: '+654321987', address: '654 Cedar St', sex: 'Male', department: 'Finance' }
  ];

  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.attendance = 
    { id: 1, employee_name: 'John Doe', date: '2024-01-28', arriving_time: '09:00', start_break_time: '12:00', end_break_time: '13:00', leaving_time: '17:00' };

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
  editAttendance() {
    if (this.attendanceForm.invalid) {
      return;
    }else{
      console.log('editing an attendance');
      this.router.navigate(['/attendance']);
    }
}

}
