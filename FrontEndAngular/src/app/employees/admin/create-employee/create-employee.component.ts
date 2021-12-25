import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  myForm!:FormGroup;

  constructor(private employeeService: EmployeeService,
    private router: Router, private dialogClose: MatDialog,) { }

  ngOnInit() {
    this.ValidatedForm();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employee.idUser = 1;
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      window.location.reload()
      //this.gotoList();
    });
  }

  onSubmit() {

    //this.submitted = true;
    this.save();

  }

  gotoList() {
    this.router.navigate(['employees/admin/employeesList']);
  }


  onClose() {
    this.dialogClose.closeAll();
    this.gotoList();
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





}

