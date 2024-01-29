import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddAttendancePage } from './add-attendance.page';

describe('AddAttendancePage', () => {
  let component: AddAttendancePage;
  let fixture: ComponentFixture<AddAttendancePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AddAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
