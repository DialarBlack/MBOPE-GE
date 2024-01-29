import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAttendancePage } from './edit-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: EditAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAttendancePageRoutingModule {}
