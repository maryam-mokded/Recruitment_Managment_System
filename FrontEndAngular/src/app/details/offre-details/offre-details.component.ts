import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Offers } from '../../Models/offers';
import { OffresService } from '../../Services/offers.service';
import { PostulerComponent } from '../postuler/postuler.component';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {

  public OneOffer? : Offers;

  constructor(
    private dialogClose :MatDialog,
    private dialogPostuler :MatDialog,
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
    this.dialogClose.closeAll();
  }

  onPostuler(){
    this.dialogClose.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogPostuler.open(PostulerComponent, dialogConfig);
  }
}
