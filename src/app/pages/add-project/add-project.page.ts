import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.page.html',
  styleUrls: ['./add-project.page.scss'],
})
export class AddProjectPage implements OnInit {

  projectForm: FormGroup;
  title="";
  description="";
  status="";

  constructor(private menuCtrl: MenuController, private router: Router, private http: HttpClient, private modalController: ModalController, private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
   }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  get projectFormControls() {
    return this.projectForm.controls;
  }

  addProject() {
    const projectData={
      title:this.title,
      description:this.description,
      status:this.status
      
    }
    return this.http.post('https://dialarblack.pythonanywhere.com/projects/', projectData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Project added successfully.'); // Display success message
        this.router.navigate(['/projects']); // Navigate to the list of employees
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
