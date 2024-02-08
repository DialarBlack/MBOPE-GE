// login.page.ts
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private menuCtrl: MenuController, private route: ActivatedRoute) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
      this.menuCtrl.enable(false); // Disable the menu
  }

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        // Successful login, redirect to home page or dashboard
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        // Handle error, such as displaying a message to the user
        console.error('Login failed', error);
      }
    });
  }
}
