import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  className?: string;
  employee!: Employee;
  

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private dialogClose :MatDialog) { }

  ngOnInit() {
    this.employee = new Employee();

    this.employeeService.getClassName(JSON.parse(localStorage.getItem('IdUser') || '[]') || []).subscribe(a =>{
      this.className = a;
      console.log(this.className);});

    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(JSON.parse(localStorage.getItem('IdUser') || '[]') || []).subscribe(o =>{
      this.employee = o;
      //console.log(typeof this.OneOffer);
      console.log(this.employee);
  });
}

  list(){
    this.router.navigate(['employees/admin/employeesList']);
  }

  onClose(){
    this.dialogClose.closeAll();
  }

}
