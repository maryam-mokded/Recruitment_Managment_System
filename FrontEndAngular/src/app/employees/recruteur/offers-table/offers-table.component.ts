import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OffreComponent } from 'src/app/details-offre/offre/offre.component';
import { Offers } from 'src/app/Models/offers';
import { OffresService } from 'src/app/Services/offers.service';
import { CreateOfferComponent } from '../create-offer/create-offer.component';
import { UpdateOfferComponent } from '../update-offer/update-offer.component';
@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css']
})
export class OffersTableComponent implements OnInit {

  // AddForPaginator
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  nb?:number;
  ELEMENT_DATA?:Offers[];
  displayedColumns: string[] = ['idOffre','titre', 'description', 'date', 'nbPost','action'];
  dataSource!:MatTableDataSource<any>;

  constructor(
    private dialog :MatDialog,
    private offerServ : OffresService,
  ) { }

  ngOnInit(): void {
    this.getListOffers();
   }


  getListOffers(){
    this.offerServ.ListeOffers().subscribe(ListOffers =>{
      this.ELEMENT_DATA = ListOffers;
      this.dataSource = new MatTableDataSource(ListOffers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort =this.matSort;
      console.log(this.dataSource);
     });
  }



  onOpenDialogCreate():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateOfferComponent, dialogConfig);
  }

  onOpenDialogUpdate(o:Offers):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(o.idOffre));
    this.dialog.open(UpdateOfferComponent, dialogConfig);
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

  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }
}
