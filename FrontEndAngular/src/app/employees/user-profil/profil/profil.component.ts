import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UpdatePhotoComponent } from '../update-photo/update-photo.component';
import { Employee } from '../../../Models/employee';
import { EmployeeService } from '../../../Services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { number } from 'echarts';
import { CompetanceService } from 'src/app/Services/competance.service';
import { competance } from 'src/app/Models/Competance';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  public testPwdInCorrect: boolean = false;
  public testConfirmedPwdInCorrect: boolean = false;

  public pwd?: string;
  public NPwd!: string;
  public CPwd!: string;

  public testInputLienG: boolean = false;
  public testInputLienF: boolean = false;
  public testInputLienL: boolean = false;
  public testInputLienI: boolean = false;

  public AddC: competance = new competance();
  public competanceList: competance[] = [];
  public competance?: competance = new competance();

  public id?: number;
  public employe: Employee = new Employee();

  public test: boolean = true;
  public ShowPwd: boolean = true;
  public ChangePwd: boolean = true;
  public AddCpt: boolean = false;

  public profilStatus: string = 'Profil';

  myForm!: FormGroup;
  myFormProfil!: FormGroup;

  constructor(
    private CompetanceServ: CompetanceService,
    private EmpServ: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ValidatedFormProfil();
    this.ValidatedForm();
    this.getEmployee();
    this.id = this.employe?.idUser;
    this.getAllCompetance();
  }

  ValidatedFormProfil() {
    this.myFormProfil = new FormGroup({
      'nom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'adress' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      'cin' : new FormControl(null,[Validators.required , Validators.pattern("[0-9]{8}")]),
      'tel' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]{8}")]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
    });
  }


  get nom(){
    return this.myFormProfil.get('nom') ;
  }
  get prenom(){
    return this.myFormProfil.get('prenom') ;
  }
  get email(){
    return this.myFormProfil.get('email') ;
  }
  get adress(){
    return this.myFormProfil.get('adress') ;
  }
  get cin(){
    return this.myFormProfil.get('cin') ;
  }
  get telephone(){
    return this.myFormProfil.get('tel') ;
  }

  getEmployee() {
    this.id = 34;
    this.EmpServ.getEmployee(this.id).subscribe((emp) => {
      this.employe = emp;
    });
  }

  modifierProfil() {
    if (this.test == true) {
      this.test = false;
      this.profilStatus = 'Editer Profil';
      console.log(this.employe);
      this.id = this.employe?.idUser;
      this.EmpServ.updateEmployee(34, this.employe).subscribe((emp) => {});
    } else {
      this.test = true;
      this.profilStatus = 'Profil';
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }
    return value;
  }

  // Changer Password

  AnnulerChangerPassword(){
    this.ChangePwd = true;
  }

  showPwd(): void {
    if (this.ShowPwd == true) {
      this.ShowPwd = false;
    } else {
      this.ShowPwd = true;
    }
  }

  AfficherLaberlChangeMdp() {
    this.ChangePwd = false;
  }
  ValidatedForm() {
    this.myForm = new FormGroup({
      pwd: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      NPwd: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      CPwd: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }
  get Pwd() {
    return this.myForm.get('pwd');
  }
  get Nvpwd() {
    return this.myForm.get('NPwd');
  }
  get Cfpwd() {
    return this.myForm.get('CPwd');
  }

  ChangerPassword() {
    if (this.pwd != this.employe.pwd) {
      this.testPwdInCorrect = true;
    } else {
      if (this.NPwd != this.CPwd) {
        this.testPwdInCorrect = false;
        this.testConfirmedPwdInCorrect = true;
      } else {
        this.testPwdInCorrect = false;
        this.testConfirmedPwdInCorrect = false;
        this.employe.pwd = this.NPwd;
        this.EmpServ.updateEmployee(34, this.employe).subscribe(() => {
          this.ChangePwd = true;
          console.log('mot de passe changer avec succes');
        });

        window.location.reload();
      }
    }
  }

  //CRUD Competance

  AnnulerAdd() {
    this.AddCpt = false;
  }

  getAllCompetance() {
    this.CompetanceServ.ListeCompetances().subscribe((ListC) => {
      var _j = 0;
      for (var _i = 0; _i < ListC.length; _i++) {
        if (ListC[_i].user?.idUser == this.employe?.idUser) {
          this.competanceList[_j] = ListC[_i];
          _j++;
        }
      }
      console.log(this.competanceList);
    });
  }

  ModifierCompetance(event: any, c: competance) {
    c.pourcentage = event.value / 1000;
    this.CompetanceServ.modifierCompetance(c).subscribe(() => {
      console.log(event.value / 1000 + '%');
      console.log(c);
    });
  }

  AddCompetance() {
    this.AddCpt = true;
  }

  SupprimerCompetance(c: competance) {
    let confirmation = confirm('Êtes-vous sûr de supprimer ??');
    if (confirmation)
      this.CompetanceServ.supprimerCompetance(c.idCompetance).subscribe(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log('Erreue');
        }
      );
  }

  SaveCompetance() {
    this.AddC.idCompetance = 1;
    this.AddC.pourcentage = this.AddC.pourcentage! / 1000;
    this.CompetanceServ.AjouterCompetance(
      this.AddC,
      this.employe?.idUser
    ).subscribe((c) => {
      this.AddCpt = false;
      window.location.reload();
    });
    console.log(this.AddCpt);
    console.log(this.AddC);
  }

  //CRUD Liens

  ModifierLienG() {
    this.EmpServ.updateEmployee(34, this.employe).subscribe(() => {
      this.testInputLienG = false;
    });
  }
  ModifierLienF() {
    this.EmpServ.updateEmployee(34, this.employe).subscribe(() => {
      this.testInputLienF = false;
    });
  }
  ModifierLienL() {
    this.EmpServ.updateEmployee(34, this.employe).subscribe(() => {
      this.testInputLienL = false;
    });
  }
  ModifierLienI() {
    this.EmpServ.updateEmployee(34, this.employe).subscribe(() => {
      this.testInputLienI = false;
    });
  }
  ShowLabelGit() {
    this.testInputLienG = true;
  }
  ShowLabelFacebook() {
    this.testInputLienF = true;
  }
  ShowLabelLinkedIn() {
    this.testInputLienL = true;
  }
  ShowLabelInstagram() {
    this.testInputLienI = true;
  }
  ModifierLien() {}

  SupprimerLienG() {
    let confirmation = confirm('Êtes-vous sûr de Lien de voter Github ??');
    if (confirmation) this.employe.lienGithub = '';
    console.log(this.employe);
    this.EmpServ.updateEmployee(34, this.employe).subscribe((emp) => {});
  }
  SupprimerLienL() {
    let confirmation = confirm('Êtes-vous sûr de Lien de voter LinkedIn ??');
    if (confirmation) this.employe.lienLinkedIn = '';
    console.log(this.employe);
    this.EmpServ.updateEmployee(34, this.employe).subscribe((emp) => {});
  }
  SupprimerLienI() {
    let confirmation = confirm('Êtes-vous sûr de Lien de voter Instagram ??');
    if (confirmation) this.employe.lienInstagram = '';
    console.log(this.employe);
    this.EmpServ.updateEmployee(34, this.employe).subscribe((emp) => {});
  }
  SupprimerLienF() {
    let confirmation = confirm('Êtes-vous sûr de Lien de voter Facebook ??');
    if (confirmation) this.employe.lienFacebook = '';
    console.log(this.employe);
    this.EmpServ.updateEmployee(34, this.employe).subscribe((emp) => {});
  }



  //Popu up Changer Photo
  onOpenDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdatePhotoComponent, dialogConfig);
  }

}
