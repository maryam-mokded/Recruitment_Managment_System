import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Offers } from '../Models/offers';
import { OffresService } from '../Services/offers.service';
import { OffreDetailsComponent } from '../offre-details/offre-details.component';
import {

} from '@angular/forms';
@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  public OneOffer? : Offers;


  constructor(
    private dialog :MatDialog,
    private dialogClose :MatDialog,
    private offresServ : OffresService,
    ) { }

  ngOnInit(): void {
    //Revenir a offre détails
    this.offresServ.ConsulterOffer(JSON.parse(localStorage.getItem('IdOffer') || '[]') || []).subscribe(o =>{
      this.OneOffer = o;
      console.log(this.OneOffer);
     });





  }


  onClose(){
    this.dialogClose.closeAll();
  }

  onRevenir(Offer : Offers){
    this.dialogClose.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(Offer.idOffre));
    this.dialog.open(OffreDetailsComponent, dialogConfig);
  }
  // onkey(event:any){
  //   // (keyup)="onkey($event)"
  //   // this.value = event.target.value;
  // }
}
