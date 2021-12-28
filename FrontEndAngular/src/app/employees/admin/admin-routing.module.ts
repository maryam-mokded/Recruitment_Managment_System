import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent  } from './employee-details/employee-details.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { UpdateEmployeeComponent  } from './update-employee/update-employee.component';
import { MailboxComponent  } from './mailbox/mailbox.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'employeesList', component: EmployeesListComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  { path: 'mailbox', component:  MailboxComponent },
  { path: 'addemployee', component: CreateEmployeeComponent  },
  { path: 'detailemployee/:id', component: EmployeeDetailsComponent   },
  { path: 'updateemployee/:id', component: UpdateEmployeeComponent   },
  { path:'',redirectTo:'/admin',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
