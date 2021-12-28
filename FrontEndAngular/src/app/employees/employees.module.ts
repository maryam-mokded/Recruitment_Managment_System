import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { NavBarComponent } from './navbar-emp/navbar-emp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { InterviewerComponent } from './interviewer/interviewer.component';


@NgModule({
  declarations: [
    AdminComponent,
    EmployeesComponent,
    NavBarComponent,
    SidebarComponent,
    InterviewerComponent,

  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
