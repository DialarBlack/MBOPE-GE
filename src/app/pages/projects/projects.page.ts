import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { EditProjectPage } from '../edit-project/edit-project.page';
import { AddProjectPage } from '../add-project/add-project.page';
import {  MenuController } from '@ionic/angular';


interface Project {
  id: number;
  title: string;
  description: string;
  status: string
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects: any;
  searchQuery = "";
  filteredProjects: any[]= [];
  showSuccessMessage: boolean = false;

  constructor(private menuCtrl: MenuController, private modalController: ModalController, private router: Router, public alertController: AlertController,  public toastController: ToastController, private http: HttpClient) { 
    this.http.get('https://dialarblack.pythonanywhere.com/projects/').subscribe(response => {
      this.projects = response
      this.filteredProjects = this.projects;
    });
  }


  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  filterProjects() {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredProjects = this.projects; // Reset filter if search query is empty
      return;
    }

    this.filteredProjects = this.projects.filter(
      (project: Project) =>
        project.title.toLowerCase().includes(query) ||
        project.status.toLowerCase().includes(query)
    );
  }

  async editProject(index: number) {
    
    const modal = await this.modalController.create({
      component: EditProjectPage,
      componentProps: {
        project: this.filteredProjects[index]
      },
      keyboardClose: true,
      backdropDismiss: true
    });

    return await modal.present();
  }

  async addProject() {
    const modal = await this.modalController.create({
      component: AddProjectPage,
      keyboardClose: true,
      backdropDismiss: true
    });
    return await modal.present();
  }

  async deleteItem(projectId: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this project?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
          this.http.delete('https://dialarblack.pythonanywhere.com/projects/' + projectId)
          .subscribe({
            next: () => {
              this.showToast('Project deleted successfully');
              // Redirect to the desired page after deletion
              this.router.navigate(['/projects']);
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
