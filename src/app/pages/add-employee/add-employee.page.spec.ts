import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddEmployeePage } from './add-employee.page';

describe('AddEmployeePage', () => {
  let component: AddEmployeePage;
  let fixture: ComponentFixture<AddEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AddEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
