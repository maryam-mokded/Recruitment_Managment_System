import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Offers } from '../../Models/offers';
import { OffresService } from '../../Services/offers.service';
import { CvService } from '../../Services/cv.service';
import { OffreComponent } from '../offre/offre.component';
import { CondidatService } from '../../Services/condidat.service';
import { condidat } from '../../Models/condidat';
import { Cv } from '../../Models/Cv';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ParseSourceFile } from '@angular/compiler';


@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css'],
})

export class PostulerComponent implements OnInit {

  public OneOffer?: Offers;
  public NewCondidat = new condidat();
  public NewCv = new Cv();
  public message?:string="";
  public IdCondAdd?:number;
  myForm!:FormGroup;
  file:FileReader =new FileReader();

  constructor(
    private dialog: MatDialog,
    private dialogClose: MatDialog,
    private offresServ: OffresService,
    private cvServ : CvService,
    private condServ: CondidatService
  ) {}

  ngOnInit(): void {
    //Revenir a offre détails
      this.OffreDetailsMethode();
      this.ValidatedForm();
  }

  OffreDetailsMethode(){
    this.offresServ
      .ConsulterOffer(JSON.parse(localStorage.getItem('IdOffer') || '[]') || [])
      .subscribe((o) => {
        this.OneOffer = o;
        console.log(this.OneOffer);
      });
  }

  supprimerDemande(id:number){
    let confirmation =confirm("Êtes-vous sûr de supprimer votre demande ??")
    if(confirmation)
    this.condServ.supprimerCondidat(id).subscribe(()=>{
      console.log("produit supprimé");
    });
    this.dialogClose.closeAll();
  }

  addCondidat() {
    console.log(this.NewCondidat);
    this.NewCondidat.idUser = 1;
    this.condServ
        .AjouterCondidat(this.NewCondidat)
        .subscribe(condid=>{
          this.IdCondAdd = condid.idUser;
          this.message="success";
          localStorage.setItem('message', JSON.stringify(this.message));
          //console.log(condid.idUser);
        });
     // this.dialogClose.closeAll();
        console.log(this.file);
    }

  onClose() {
    this.dialogClose.closeAll();
  }

  onRevenir(Offer: Offers) {
    this.dialogClose.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(Offer.idOffre));
    this.dialog.open(OffreComponent, dialogConfig);
  }

  ValidatedForm(){
    this.myForm = new FormGroup({
      'name' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'adresse' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      'cin' : new FormControl(null,[Validators.required , Validators.pattern("[0-9]{8}")]),
      'telephone' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]{8}")]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
    });
  }


  get name(){
    return this.myForm.get('name') ;
  }
  get prenom(){
    return this.myForm.get('prenom') ;
  }
  get email(){
    return this.myForm.get('email') ;
  }
  get adresse(){
    return this.myForm.get('adresse') ;
  }
  get cin(){
    return this.myForm.get('cin') ;
  }
  get telephone(){
    return this.myForm.get('telephone') ;
  }

}