import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditProjectPage } from './edit-project.page';

describe('EditProjectPage', () => {
  let component: EditProjectPage;
  let fixture: ComponentFixture<EditProjectPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
