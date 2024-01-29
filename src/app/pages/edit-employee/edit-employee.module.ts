import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployeePageRoutingModule } from './edit-employee-routing.module';

import { EditEmployeePage } from './edit-employee.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployeePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditEmployeePage]
})
export class EditEmployeePageModule {}
