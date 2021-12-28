import { NgModule } from '@angular/core';
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
 // AddForPaginator
 import { MatTableModule } from '@angular/material/table';
 import { MatPaginatorModule } from '@angular/material/paginator';
 //add For Sorted
 import { MatSortModule } from '@angular/material/sort';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatInputModule } from '@angular/material/input';
 import { ReactiveFormsModule } from '@angular/forms';
 //add Snackbar
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MailboxComponent } from './mailbox/mailbox.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    DashboardAdminComponent,
    UpdateEmployeeComponent,
    MailboxComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
     //add For Sorted
     MatSortModule,
     // AddForPaginator
     MatPaginatorModule,
     MatFormFieldModule,
     MatInputModule,
     MatTableModule,
     MatSnackBarModule,
     NgxChartsModule

  ]
})
export class AdminModule { }
