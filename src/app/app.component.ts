import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showSideMenu: boolean;
  contentId: string;

  constructor( private router: Router, private navCtrl: NavController) {
    this.showSideMenu = false;
    this.contentId ='main-content';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.contentId = !['/login', '/register', '/loader'].includes(event.urlAfterRedirects) ? 'main-content' : '';
      }
    });
 }
  
}
