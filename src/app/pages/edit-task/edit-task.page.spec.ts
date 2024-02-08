import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditTaskPage } from './edit-task.page';

describe('EditTaskPage', () => {
  let component: EditTaskPage;
  let fixture: ComponentFixture<EditTaskPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
