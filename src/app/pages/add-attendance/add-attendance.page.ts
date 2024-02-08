import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.page.html',
  styleUrls: ['./add-attendance.page.scss'],
})
export class AddAttendancePage implements OnInit {
  attendanceForm: FormGroup;
  employees : any
  date="";
  employee="";
  attendance_type="";
  date_time="";

  constructor(private menuCtrl: MenuController, private modalController: ModalController,private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {

    this.http.get('https://dialarblack.pythonanywhere.com/employees/').subscribe(response => {
      this.employees = response
    });

    this.attendanceForm = this.formBuilder.group({
      employee: ['', Validators.required],
      date: ['', Validators.required],
      attendance_type: ['', Validators.required],
      date_time: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  get attendanceFormControls() {
    return this.attendanceForm.controls;
  }

  addAttendanceRecord() {
    const attendanceData={
      date:this.date,
      employee:this.employee,
      attendance_type:this.attendance_type,
      date_time:this.date_time,
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/attendance/', attendanceData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Attendance record added successfully.'); // Display success message
        this.router.navigate(['/attendance']); // Navigate to the list of employees
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
