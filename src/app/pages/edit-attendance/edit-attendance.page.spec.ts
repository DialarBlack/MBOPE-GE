import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAttendancePage } from './edit-attendance.page';

describe('EditAttendancePage', () => {
  let component: EditAttendancePage;
  let fixture: ComponentFixture<EditAttendancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
