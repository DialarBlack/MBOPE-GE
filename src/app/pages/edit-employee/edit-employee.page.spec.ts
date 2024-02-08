import { ComponentFixture, TestBed , waitForAsync} from '@angular/core/testing';
import { EditEmployeePage } from './edit-employee.page';

describe('EditEmployeePage', () => {
  let component: EditEmployeePage;
  let fixture: ComponentFixture<EditEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
