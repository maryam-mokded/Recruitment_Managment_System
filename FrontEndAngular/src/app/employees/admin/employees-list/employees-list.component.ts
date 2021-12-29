import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../Services/employee.service';
import { Employee } from '../../../Models/employee';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  ELEMENT_DATA?:Employee[];
  employee?:Employee;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['idUser','nom', 'prenom', 'email','adress','tel','action'];

  constructor(private employeeService: EmployeeService,
    private router: Router, private dialog:MatDialog,public authService: AuthService) {}

  ngOnInit() {
    this.reloadData();
   
  }

  reloadData() {
     this.employeeService.getEmployeesList().subscribe(o =>{
      this.ELEMENT_DATA= o;
      this.dataSource = new MatTableDataSource(o);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort =this.matSort;
      console.log(this.dataSource);
      console.log(this.ELEMENT_DATA);});
    
  }

  deleteEmployee(id: number) {
    //let e?:Employee;
    this.employeeService.getEmployee(id).subscribe(o =>{
      this.ELEMENT_DATA= o;});
      console.log(this.ELEMENT_DATA);
      //console.log(this.id);
    let confirmation =confirm("Êtes-vous sûr de supprimer l'employée ou son id est egale à : "+id+" ??")
    if(confirmation)
    this.employeeService.deleteEmployee(id).subscribe(data => {
          console.log(data);
      window.location.reload();
    });
  }


  employeeDetails(employee:Employee){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdUser', JSON.stringify(employee.idUser));
    this.dialog.open(EmployeeDetailsComponent, dialogConfig);
    //this.router.navigate(['employees/admin/detailemployee', id]);
  }

  updateEmployee(employee:Employee){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdUser', JSON.stringify(employee.idUser));
    this.dialog.open(UpdateEmployeeComponent, dialogConfig);
    //this.router.navigate(['employees/admin/updateemployee', id]);
  }

  onOpenDialogCreate():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }



  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }

}