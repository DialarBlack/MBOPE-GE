import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { EditTaskPage } from '../edit-task/edit-task.page';
import { AddTaskPage } from '../add-task/add-task.page';
import { EditAttendancePage } from '../edit-attendance/edit-attendance.page';
import { AddAttendancePage } from '../add-attendance/add-attendance.page';
import {  MenuController } from '@ionic/angular';

interface Attendance {
  id: number;
  date: string;
  employee: string;
  attendance_type:string;
  date_time: string
}

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  contact: string;
  address: string,
  sex: string,
  department: number,
  user: number
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  attendances: any;
  searchQuery = "";
  filteredAttendances: any[]= [];
  showSuccessMessage: boolean = false;
  employees: any;
  emp: any;



  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, public alertController: AlertController,  public toastController: ToastController, private http: HttpClient) {
    this.http.get('https://dialarblack.pythonanywhere.com/attendance/').subscribe(response => {
      this.attendances = response
      this.filteredAttendances = this.attendances;
    });
    this.http.get('https://dialarblack.pythonanywhere.com/employees/').subscribe(response => {
      this.employees = response
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  getEmployeeName(employeeId: number): string {
    const employee = this.employees.find((emp: Employee)  => emp.id === employeeId);
    if (employee) {
      return `${employee.first_name} ${employee.last_name}`;
    }
    return '';
  }

  filterAttendance() {
    const query = this.searchQuery.toLowerCase().trim();
  
    if (!query) {
      this.filteredAttendances = this.attendances; // Reset filter if search query is empty
      return;
    }
  
    this.filteredAttendances = this.attendances.filter(
      (attendance: Attendance) => {
        const employeeName = this.getEmployeeName(Number(attendance.employee));
        return (
          attendance.date.toLowerCase().includes(query) ||
          attendance.attendance_type.toLowerCase().includes(query) ||
          employeeName.toLowerCase().includes(query)
        );
      }
    );
  }
  async editAttendance(index: number) {

    const modal = await this.modalController.create({
      component: EditAttendancePage,
      componentProps: {
        attendance: this.filteredAttendances[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }

  async addAttendance() {
    const modal = await this.modalController.create({
      component: AddAttendancePage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }
  async deleteItem(attendanceId: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this attendance?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/attendance/' + attendanceId)
          .subscribe({
            next: () => {
              this.showToast('Attendance deleted successfully');
              // Redirect to the desired page after deletion
              this.router.navigate(['/attendance']);
            }
          });
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
