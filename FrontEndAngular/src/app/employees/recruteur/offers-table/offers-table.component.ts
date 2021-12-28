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
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css']
})
export class OffersTableComponent implements OnInit {


  intervalId?:any;
  idContenu?: string;
  idTitle?: string;
  Toast!: string[];
  counter: number = 0;
  ShowToast: string = 'hide';


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
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getListOffers();

    this.idContenu = 'TostSuccessContenu';
    this.idTitle = 'TostSuccessTile';

    this.Toast = JSON.parse(localStorage.getItem('Toast') || '[]') || [];
    if (this.Toast[0] == 'Success') {
      console.log('Toast est n est pas vide');
      this.showToast();
    } else {
      console.log('Toast Vide');
    }

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

  DeleteOffer(id:number){
    let confirmation =confirm("Êtes-vous sûr de supprimer ??")
    if(confirmation)
    this.offerServ.supprimerOffer(id).subscribe(()=>{
      this.Toast[0] = 'Success';
      this.Toast[1] ='Offre was successfully removed';
      localStorage.setItem('Toast', JSON.stringify(this.Toast));
      window.location.reload();
    },
    (error) => {
      this.idContenu = 'TostDangerContenu';
      this.idTitle = 'TostDangerTile';
      this.Toast[0] = 'Failed';
      this.Toast[1] ='Failed to remove offer';
      this.showToast();
    }
  );
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

  showToast() {
    if (this.ShowToast == 'hide') {
      setTimeout(() => {
        this.ShowToast = 'show';
        console.log(this.ShowToast);
      }, 1);
    }

    setTimeout(() => {
      this.ShowToast = 'hide';
      this.Toast = [];
      localStorage.setItem('Toast', JSON.stringify(this.Toast));
      console.log(this.ShowToast);
    }, 6100);
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter === 6)
      clearInterval(this.intervalId);
    }, 1000);
    this.counter=0

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

}
