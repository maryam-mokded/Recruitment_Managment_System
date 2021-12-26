import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee!: Employee;
  myForm!:FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private dialogClose: MatDialog,) { }

  ngOnInit() {
    // this.employee = new Employee();

    // this.id = this.route.snapshot.params['id'];
    this.ValidatedForm();
    this.employeeService.getEmployee(JSON.parse(localStorage.getItem('IdUser') || '[]') || []).subscribe(o =>{
      this.employee = o;
    });
  }


  ValidatedForm(){
    this.myForm = new FormGroup({
      'nom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'email' : new FormControl(null,[Validators.required, Validators.minLength(16),Validators.maxLength(30)]),
      'cin' : new FormControl(null,[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      'adress' : new FormControl(null,[Validators.required, Validators.minLength(4),Validators.maxLength(30)]),
      'tel' : new FormControl(null,[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      });
 }

 get nom(){
  return this.myForm.get('nom') ;
}

get prenom(){
  return this.myForm.get('prenom') ;
}

get email(){
  return this.myForm.get('email') ;
}

get cin(){
  return this.myForm.get('cin') ;
}

get adress(){
  return this.myForm.get('adress') ;
}

get tel(){
  return this.myForm.get('tel') ;
}

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee.idUser, this.employee)
      .subscribe(data => {
        window.location.reload()
        this.onClose();
        console.log(data);
      });
  }
  
  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['employees/admin/employeesList']);
  }

  onClose() {
    this.dialogClose.closeAll();
  }
  
}