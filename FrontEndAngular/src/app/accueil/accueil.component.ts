import {  OnInit } from '@angular/core';
import { Component, HostListener } from '@angular/core';

import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OffreComponent } from '../details-offre/offre/offre.component';
import { Offers } from '../Models/offers';
import { OffresService } from '../Services/offers.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  offers? : Offers[];
  public nb? : number;
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

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
    this.dialog.open(OffreComponent, dialogConfig);
  }
}
