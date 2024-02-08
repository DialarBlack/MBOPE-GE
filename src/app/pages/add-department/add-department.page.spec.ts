import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddDepartmentPage } from './add-department.page';
import {  MenuController } from '@ionic/angular';

describe('AddDepartmentPage', () => {
  let component: AddDepartmentPage;
  let fixture: ComponentFixture<AddDepartmentPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AddDepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
