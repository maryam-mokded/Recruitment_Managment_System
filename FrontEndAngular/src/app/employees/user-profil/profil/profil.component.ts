import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UpdatePhotoComponent } from '../update-photo/update-photo.component';
import { Employee } from '../../../Models/employee';
import { EmployeeService } from '../../../Services/employee.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  myForm!:FormGroup;
  public id?:number;
  public employe?:Employee= new Employee();
  public test:boolean = true;
  public ShowPwd:boolean = true;
  public ChangePwd:boolean = true;
  public profilStatus:string="Profil";
  idEmp?:number|undefined;
 constructor(
    private EmpServ:EmployeeService,
    private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
    this.getEmployee();
    this.id = this.employe?.idUser;
  }

  getEmployee(){
    this.id = 11;
    this.EmpServ.getEmployee(this.id)
    .subscribe(emp => {
      this.employe = emp;
    });
  }

  modifierProfil(){
    if(this.test == true){
      this.test=false;
      this.profilStatus="Editer Profil";
      console.log(this.employe);
      this.id=this.employe?.idUser;
      this.EmpServ.updateEmployee(11,this.employe)
          .subscribe(emp=>{
          });
    }else{
      this.test = true;
      this.profilStatus="Profil";
    }
  }

  showPwd():void{
    if(this.ShowPwd == true){
      this.ShowPwd=false;
    }else{
      this.ShowPwd = true;
    }
  }

  ChangerPassword(){
    if( this.ChangePwd ==true) {
      this.ChangePwd =false;
    }else {
      this.ChangePwd = true;
    }
  }
  onOpenDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdatePhotoComponent, dialogConfig);
  }
}
