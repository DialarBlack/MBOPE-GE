import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  goToApp(){
    console.log('manage employee');
    this.router.navigate(['/employees']);
  }

}
