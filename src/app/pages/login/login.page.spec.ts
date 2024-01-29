import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router'
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[ LoginPage],
      imports: [
       IonicModule.forRoot(),
       AppRoutingModule,
       ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  }));

  it('should create form on init', () => {

    component.ngOnInit();

    expect(component.form).not.toBeUndefined();
  })

  it('should go to home page after login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });

  it('should go to Registration page after register', () => {
    spyOn(router, 'navigate');

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['register'])
  });
});
