import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../Services/auth.service';
import { ShowResultsComponent } from '../show-results/show-results.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog :MatDialog,public authService: AuthService

  ) { }

  ngOnInit(): void {
  }

  ShowResult(){
     const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(ShowResultsComponent, dialogConfig);

    }

}
