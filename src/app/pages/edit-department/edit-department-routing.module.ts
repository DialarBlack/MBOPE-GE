import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDepartmentPage } from './edit-department.page';

const routes: Routes = [
  {
    path: '',
    component: EditDepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDepartmentPageRoutingModule {}
