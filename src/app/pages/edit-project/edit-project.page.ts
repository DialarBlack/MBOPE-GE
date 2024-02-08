import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.page.html',
  styleUrls: ['./edit-project.page.scss'],
})
export class EditProjectPage implements OnInit {

  projectForm: FormGroup;
  project: any={};
  title = "";
  description = "";
  status = "";

  constructor(private menuCtrl: MenuController, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder,private router: Router) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.projectForm.patchValue({
      title: this.project.title,
      description: this.project.description,
      status: this.project.status,
    });
  }

  async editProject(projectId: number) {
    
    const projectData = this.projectForm.value;
    // Perform the update operation using the API
     this.http.put('https://dialarblack.pythonanywhere.com/projects/' + projectId+'/', projectData)
      .subscribe({
        next: () => {
          alert('Project updated successfully.'); // Display success message
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
