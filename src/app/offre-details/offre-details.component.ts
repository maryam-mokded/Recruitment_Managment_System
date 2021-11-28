import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {

  constructor(private dialog :MatDialog) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialog.closeAll();
  }

}
