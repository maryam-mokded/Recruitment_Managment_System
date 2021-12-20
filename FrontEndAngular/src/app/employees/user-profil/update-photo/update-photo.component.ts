import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {

  constructor(
    private dialogClose :MatDialog,
  ) { }

  ngOnInit(): void {
  }


  onCloseDialog(){
    this.dialogClose.closeAll();
  }}
