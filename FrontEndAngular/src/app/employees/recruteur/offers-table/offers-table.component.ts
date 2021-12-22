import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OffreComponent } from 'src/app/details-offre/offre/offre.component';
import { Offers } from 'src/app/Models/offers';
import { OffresService } from 'src/app/Services/offers.service';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css']
})
export class OffersTableComponent implements OnInit {

  public nb?:number;
  offersList?:Offers[];
  id?:number;

  constructor(
    private dialog :MatDialog,
    private offerServ : OffresService,
  ) { }

  ngOnInit(): void {
    this.getListOffers();
  }
  getListOffers(){
    this.offerServ.ListeOffers().subscribe(ListOffers =>{
      this.offersList = ListOffers;
      this.nb = this.offersList.length;
       console.log(this.nb);
       console.log(this.offersList);
     });
  }

  DeleteOffer(id:number){
    let confirmation =confirm("Êtes-vous sûr de supprimer ??")
    if(confirmation)
    this.offerServ.supprimerOffer(id).subscribe(()=>{
      console.log("offre supprimé");
      //refresh page
      window.location.reload();
    });
  }

  DetailsOffer(Offer:Offers){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      localStorage.setItem('IdOffer', JSON.stringify(Offer.idOffre));
      this.dialog.open(OffreComponent, dialogConfig);

  }
}
