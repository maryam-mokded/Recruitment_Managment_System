import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Offers } from 'src/app/Models/offers';
import { OffresService } from 'src/app/Services/offers.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  offer:Offers=new Offers();
  myForm!:FormGroup;
  CheckesCompetance:boolean=false;

  constructor(
    private dialogClose: MatDialog,
    private OfferServ:OffresService,
  ) { }

  ngOnInit(): void {
    // console.log(this.offer?.description);
    this.ValidatedForm();
    this.OfferServ.ConsulterOffer(JSON.parse(localStorage.getItem('IdOffer') || '[]') || []).subscribe(o =>{
      this.offer = o;
      //console.log(typeof this.OneOffer);
      console.log(this.offer);
    });

  }

  updateOffre(){

    this.OfferServ
        .modifierOffer(this.offer)
        .subscribe(o=>{
          localStorage.setItem('Toast', JSON.stringify(["Success","Offre was successfully updated"]));
          window.location.reload();
          console.log(this.offer);
        },
        (error) => {
          console.log("Failed")
        }
      );
  }

  ValidatedForm(){
     this.myForm = new FormGroup({
       'titre' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
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
