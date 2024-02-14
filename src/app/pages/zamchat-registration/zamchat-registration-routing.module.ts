import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZamchatRegistrationPage } from './zamchat-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ZamchatRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZamchatRegistrationPageRoutingModule {}
