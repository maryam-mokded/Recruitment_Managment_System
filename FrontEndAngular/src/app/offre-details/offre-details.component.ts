import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Offers } from '../Models/offers';
import { OffresService } from '../Services/offers.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {
  
  public ID?:number;
  public OneOffer? : Offers;
  
  constructor(
    private dialog :MatDialog,
    private offresServ : OffresService,
  ) {}

  ngOnInit(): void {
    this.offresServ.ConsulterOffer(JSON.parse(localStorage.getItem('IdOffer') || '[]') || []).subscribe(o =>{
      this.OneOffer = o;
      //console.log(typeof this.OneOffer);
      console.log(this.OneOffer);
    });
    
  }

   

  onClose(){
    this.dialog.closeAll();
  }

}
