import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProjectPageRoutingModule } from './add-project-routing.module';

import { AddProjectPage } from './add-project.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddProjectPage]
})
export class AddProjectPageModule {}
