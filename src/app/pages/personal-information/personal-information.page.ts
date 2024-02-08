import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private menuCtrl: MenuController,) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
