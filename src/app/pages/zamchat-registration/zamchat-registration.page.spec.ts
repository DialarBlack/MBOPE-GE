import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ZamchatRegistrationPage } from './zamchat-registration.page';

describe('ZamchatRegistrationPage', () => {
  let component: ZamchatRegistrationPage;
  let fixture: ComponentFixture<ZamchatRegistrationPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ZamchatRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
