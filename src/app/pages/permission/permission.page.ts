import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-permission',
  templateUrl: './permission.page.html',
  styleUrls: ['./permission.page.scss'],
})
export class PermissionPage implements OnInit {

  constructor(private menuCtrl: MenuController,) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
