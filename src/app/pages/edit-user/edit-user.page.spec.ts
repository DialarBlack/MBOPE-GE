import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditUserPage } from './edit-user.page';

describe('EditUserPage', () => {
  let component: EditUserPage;
  let fixture: ComponentFixture<EditUserPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
