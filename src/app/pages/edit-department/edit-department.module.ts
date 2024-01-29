import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDepartmentPageRoutingModule } from './edit-department-routing.module';

import { EditDepartmentPage } from './edit-department.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDepartmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditDepartmentPage]
})
export class EditDepartmentPageModule {}
