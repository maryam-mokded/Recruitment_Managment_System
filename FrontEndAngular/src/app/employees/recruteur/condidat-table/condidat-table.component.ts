import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interviewList } from 'src/app/Models/interviews';
import { OffreComponent } from '../../../details-offre/offre/offre.component';
import { InterviewsService } from 'src/app/Services/interviews.service';
import { OffresService } from 'src/app/Services/offers.service';
import { DetailsCondidatComponent } from '../details-condidat/details-condidat.component';
import { condidat } from 'src/app/Models/condidat';
import { CvService } from 'src/app/Services/cv.service';
import { CondidatService } from 'src/app/Services/condidat.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-condidat-table',
  templateUrl: './condidat-table.component.html',
  styleUrls: ['./condidat-table.component.css']
})
export class CondidatTableComponent implements OnInit {

  // AddForPaginator
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;
  nb?:number;
  ELEMENT_DATA?:interviewList[];
  displayedColumns: string[] = ['id_Interview', 'user','offre','action'];
  dataSource!:MatTableDataSource<any>;

  constructor(
    private dialog :MatDialog,
    private interviewServ : InterviewsService,
  ) { }


  ngOnInit(): void {
    this.getListInterview();
  }
  getListInterview(){
    this.interviewServ.getInterviewsList().subscribe(ListInterview =>{
      this.ELEMENT_DATA = ListInterview;
      this.dataSource = new MatTableDataSource(ListInterview);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(this.dataSource);
     });
  }

  deleteCondidat(interview:interviewList){
    let confirmation =confirm("Êtes-vous sûr de supprimer Ce Condidat ??")
    if(confirmation)
    this.interviewServ.deleteInterviews(interview.id_Interview).subscribe(()=>{
      console.log("Interview supprimé");
    });
    // this.id=interview.user?.idUser;
    // this.condServ.supprimerCondidat(this.id!).subscribe(()=>{
    //   console.log("Condidat supprimé");
    // });

 }

  DetailsCondidat(interview:interviewList){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Condidat', JSON.stringify(interview.user));
    this.dialog.open(DetailsCondidatComponent, dialogConfig);
  }

  DetailsOffer(interview:interviewList):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(interview.offre?.idOffre));
    this.dialog.open(OffreComponent, dialogConfig);
  }
}
