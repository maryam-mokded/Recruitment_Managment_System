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

  iduser!: any;
  className?: string;
  employee!: Employee;
  

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private dialogClose :MatDialog) { }

  ngOnInit() {
    this.employee = new Employee();

    //this.iduser = this.route.snapshot.params['idUser'];
  
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
