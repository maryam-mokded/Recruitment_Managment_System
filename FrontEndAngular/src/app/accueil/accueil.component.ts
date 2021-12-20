import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OffreDetailsComponent } from '../details/offre-details/offre-details.component';
import { Offers } from '../ConsommationAPI/Models/offers';
import { OffresService } from '../ConsommationAPI/Services/offers.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  offers? : Offers[];
  public nb? : number;
  //public msg?:string = "";

  constructor(
    private dialog :MatDialog,
    private offresServ : OffresService,
    ) { }

  ngOnInit(): void {
    //this.msg =JSON.parse(localStorage.getItem('message') || '[]') || [];
    
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
