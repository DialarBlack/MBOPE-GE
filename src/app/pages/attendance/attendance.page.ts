import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  attendance = [
    { id: 1, employee_name: 'John Doe', date: '2024-01-28', arriving_time: '09:00', start_break_time: '12:00', end_break_time: '13:00', leaving_time: '17:00' },
    { id: 2, employee_name: 'Jane Smith', date: '2024-01-28', arriving_time: '09:30', start_break_time: '12:30', end_break_time: '13:30', leaving_time: '17:30' },
    { id: 3, employee_name: 'David Johnson', date: '2024-01-28', arriving_time: '08:45', start_break_time: '12:15', end_break_time: '13:15', leaving_time: '16:45' },
    { id: 4, employee_name: 'Emily Davis', date: '2024-01-28', arriving_time: '09:15', start_break_time: '12:45', end_break_time: '13:45', leaving_time: '17:15' },
    { id: 5, employee_name: 'Michael Wilson', date: '2024-01-28', arriving_time: '09:10', start_break_time: '12:20', end_break_time: '13:20', leaving_time: '17:10' }
  ];
  
  filteredAttendanceRecords = this.attendance;
  searchTerm = '';


  constructor(private router: Router, public alertController: AlertController,  public toastController: ToastController) { }

  ngOnInit() {
  }
  filterAttendance() {
    if (this.searchTerm.trim() !== '') {
      this.filteredAttendanceRecords = this.attendance.filter(record =>
        record.employee_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredAttendanceRecords = this.attendance;
    }
  }

  editAttendance() {
    // Handle the edit functionality here
    console.log('Editing attendance record');
    this.router.navigate(['/edit-attendance']);
  }

  addAttendance() {
    // Handle the add functionality here
    console.log('Adding a new attendance record');
    this.router.navigate(['/add-attendance']);
  }
  async deleteItem(index: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this task?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
           this.attendance.splice(index, 1);
           this.showToast('Attendance deleted successfully');
         }
       }]
    });
   
    await alert.present();
   }
   
   async showToast(message: string) {
    const toast = await this.toastController.create({
       message: message,
       duration: 2000
    });
    toast.present();
   }
}
