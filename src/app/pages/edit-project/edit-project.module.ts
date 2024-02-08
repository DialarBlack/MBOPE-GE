import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProjectPageRoutingModule } from './edit-project-routing.module';

import { EditProjectPage } from './edit-project.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditProjectPage]
})
export class EditProjectPageModule {}
