import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamchatRegistrationPageRoutingModule } from './zamchat-registration-routing.module';

import { ZamchatRegistrationPage } from './zamchat-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamchatRegistrationPageRoutingModule
  ],
  declarations: [ZamchatRegistrationPage]
})
export class ZamchatRegistrationPageModule {}
