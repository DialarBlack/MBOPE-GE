import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  { 
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./pages/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./pages/attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'add-attendance',
    loadChildren: () => import('./pages/add-attendance/add-attendance.module').then( m => m.AddAttendancePageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'add-department',
    loadChildren: () => import('./pages/add-department/add-department.module').then( m => m.AddDepartmentPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./pages/add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./pages/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
  {
    path: 'edit-employee/:id',
    loadChildren: () => import('./pages/edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'edit-department',
    loadChildren: () => import('./pages/edit-department/edit-department.module').then( m => m.EditDepartmentPageModule)
  },
  {
    path: 'edit-attendance',
    loadChildren: () => import('./pages/edit-attendance/edit-attendance.module').then( m => m.EditAttendancePageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./pages/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'permission',
    loadChildren: () => import('./pages/permission/permission.module').then( m => m.PermissionPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'edit-project',
    loadChildren: () => import('./pages/edit-project/edit-project.module').then( m => m.EditProjectPageModule)
  },
  {
    path: 'add-project',
    loadChildren: () => import('./pages/add-project/add-project.module').then( m => m.AddProjectPageModule)
  },
  {
    path: 'zamchat-registration',
    loadChildren: () => import('./pages/zamchat-registration/zamchat-registration.module').then( m => m.ZamchatRegistrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
