import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddDepartmentPageRoutingModule } from './add-department-routing.module';
import { AddDepartmentPage } from './add-department.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDepartmentPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddDepartmentPage]
})
export class AddDepartmentPageModule {}
