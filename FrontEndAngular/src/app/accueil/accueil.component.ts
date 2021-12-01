import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OffreDetailsComponent } from '../offre-details/offre-details.component';
import { Offers } from '../Models/offers';
import { OffresService } from '../Services/offers.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  offers? : Offers[];
  tab = [0,1,2,3,4]
  public nb? : number;
  
  constructor(
    private dialog :MatDialog,
    private offresServ : OffresService,
    ) { }

  ngOnInit(): void {
    this.offresServ.ListeOffers().subscribe(o =>{
       this.offers = o; 
       this.nb = this.offers.length;
       // console.log(this.nb);
       // console.log(typeof this.nb);
      });
  }

  onOpenDialog(Offer : Offers):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(Offer.idOffre));
    this.dialog.open(OffreDetailsComponent, dialogConfig);
  }
}
