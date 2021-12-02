import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  valeurs: string = '';


  constructor(private dialogClose :MatDialog) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogClose.closeAll();
  }

  save(){
    console.log(this.valeurs);

  }

  // onkey(event:any){
  //   // (keyup)="onkey($event)"
  //   // this.value = event.target.value;
  // }
}
