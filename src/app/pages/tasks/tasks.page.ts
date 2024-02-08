import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { EditTaskPage } from '../edit-task/edit-task.page';
import { AddTaskPage } from '../add-task/add-task.page';
import {  MenuController } from '@ionic/angular';


interface Task {
  id: number;
  title: string;
  description: string;
  project:number;
  employee:number;
  status: string
}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: any;
  searchQuery = "";
  filteredTasks: any[]= [];
  showSuccessMessage: boolean = false;


  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, public alertController: AlertController,  public toastController: ToastController, private http: HttpClient) { 
    this.http.get('https://dialarblack.pythonanywhere.com/tasks/').subscribe(response => {
      this.tasks = response
      this.filteredTasks = this.tasks;
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  filterTasks() {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredTasks = this.tasks; // Reset filter if search query is empty
      return;
    }

    this.filteredTasks = this.tasks.filter(
      (task: Task) =>
        task.title.toLowerCase().includes(query) ||
        task.status.toLowerCase().includes(query)
    );
  }
  async editTask(index: number) {

    const modal = await this.modalController.create({
      component: EditTaskPage,
      componentProps: {
        task: this.filteredTasks[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }


  async addTask() {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }

  async deleteItem(taskId: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this Task?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/tasks/' + taskId)
          .subscribe({
            next: () => {
              this.showToast('Task deleted successfully');
              // Redirect to the desired page after deletion
              this.router.navigate(['/tasks']);
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
