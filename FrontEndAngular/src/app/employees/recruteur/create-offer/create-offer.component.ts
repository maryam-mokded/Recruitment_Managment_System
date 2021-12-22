import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Offers } from 'src/app/Models/offers';
import { OffresService } from 'src/app/Services/offers.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  Newoffer:Offers=new Offers();
  myForm!:FormGroup;
  CheckesCompetance:boolean=false;


  constructor(
    private dialogClose: MatDialog,
    private OfferServ:OffresService,
  ) { }

  ngOnInit(): void {
    // console.log(this.offer?.description);
    this.ValidatedForm();

  }


  ValidatedForm(){
     this.myForm = new FormGroup({
       'titre' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
       'description' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(1000)]),
       'nbPost' : new FormControl(null,[Validators.required , Validators.pattern("[0-9].*"),Validators.maxLength(3)]),
   });
  }


  get titre(){
    return this.myForm.get('titre') ;
  }
  get description(){
    return this.myForm.get('description') ;
  }
  get nbPost(){
    return this.myForm.get('nbPost') ;
  }

  addOffer() {
    console.log(this.Newoffer);
    this.Newoffer.idOffre = 1;
    this.Newoffer.date=new Date();
    this.OfferServ
        .AjouterOffer(this.Newoffer)
        .subscribe(o=>{
          window.location.reload();
          console.log(this.Newoffer);
        });
    }

  onClose() {
    this.dialogClose.closeAll();
  }

  addOtherCompetance(){
    if(this.CheckesCompetance==false){
        this.CheckesCompetance=true;
    }else{
      this.CheckesCompetance=false;
    }

  }



}
