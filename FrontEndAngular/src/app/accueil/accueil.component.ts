import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { OffreDetailsComponent } from '../offre-details/offre-details.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private dialog :MatDialog) { }

  ngOnInit(): void {
  }

  tab=[1,2,3,4,5,6]

  onOpenDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(OffreDetailsComponent, dialogConfig);
  }
}
