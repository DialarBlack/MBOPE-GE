import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAttendancePageRoutingModule } from './edit-attendance-routing.module';

import { EditAttendancePage } from './edit-attendance.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAttendancePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditAttendancePage]
})
export class EditAttendancePageModule {}
