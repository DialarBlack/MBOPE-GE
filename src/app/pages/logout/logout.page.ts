import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private menuCtrl: MenuController,private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      // After a successful logout, navigate to the login page
      this.router.navigateByUrl('');
    });
  }

}
