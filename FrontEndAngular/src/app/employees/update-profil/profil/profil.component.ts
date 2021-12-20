import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UpdatePhotoComponent } from '../update-photo/update-photo.component';
import { Employee } from '../../../ConsommationAPI/Models/employee';
import { EmployeeService } from '../../../ConsommationAPI/Services/employee.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  myForm!:FormGroup;
  id?:number;
  employe?:Employee= new Employee();
  test:boolean = true;
  testPwd:boolean = true;  
  profilStatus:string="Profil";
  constructor(
    private EmpServ : EmployeeService,
    private dialog :MatDialog,
  ) { }

  ngOnInit(): void {
  
    this.getEmployee();

  }

  getEmployee(){
    this.id = 11;
    this.EmpServ.getEmployee(this.id)
    .subscribe(emp => {
     //  console.log(emp)
      this.employe = emp;
    }); 
  }  

  modifierProfil(){
    if(this.test == true){
      this.test=false;
      this.profilStatus="Editer Profil";
    }else{
      this.test = true;
      this.profilStatus="Profil";
    }
  }

  showPwd():void{
    if(this.testPwd == true){
      this.testPwd=false;
    }else{
      this.testPwd = true;
    }}
  onOpenDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdatePhotoComponent, dialogConfig);
  }
}
