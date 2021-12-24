import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../Services/employee.service';
import { Employee } from '../../../Models/employee';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees?: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router, private dialog:MatDialog) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.employeeService.getEmployeesList().subscribe(o =>{
      this.employees = o;
      console.log(this.employees);});
    
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['employees/admin/detailemployee', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['employees/admin/updateemployee', id]);
  }

  onOpenDialogCreate():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }

}