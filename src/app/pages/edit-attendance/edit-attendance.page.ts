import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.page.html',
  styleUrls: ['./edit-attendance.page.scss'],
})
export class EditAttendancePage implements OnInit {

  canSave: any;
  attendanceForm:FormGroup;
  attendance: any = {};
  employees: any;
  date = "";
  employee = "";
  attendance_type = "";
  date_time = "";
  

  constructor(private authService: AuthService, private menuCtrl: MenuController, private modalController: ModalController, private route: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { 
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
    this.attendanceForm.patchValue({
      date: this.attendance.date,
      employee: this.attendance.employee,
      attendance_type: this.attendance.attendance_type,
      date_time: this.attendance.date_time,
    });
    this.menuCtrl.enable(true);
    this.canSave = this.authService.getUserStatus(); 
  }
  async editAttendance(attendanceId: number) {
    
    const attendanceData = this.attendanceForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/attendance/' + attendanceId+'/', attendanceData)
      .subscribe({
        next: () => {
          alert('Attendance record updated successfully.'); // Display success message
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
