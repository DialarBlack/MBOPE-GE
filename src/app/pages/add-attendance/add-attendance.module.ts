import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAttendancePageRoutingModule } from './add-attendance-routing.module';

import { AddAttendancePage } from './add-attendance.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAttendancePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddAttendancePage]
})
export class AddAttendancePageModule {}
