import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditDepartmentPage } from './edit-department.page';

describe('EditDepartmentPage', () => {
  let component: EditDepartmentPage;
  let fixture: ComponentFixture<EditDepartmentPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditDepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
