import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
       declarations:[ LoaderPage],
       imports: [
        IonicModule.forRoot(),
        AppRoutingModule
       ]
     });

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  }));

  it('should go to login page after load', () => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['login'])
  });
});
