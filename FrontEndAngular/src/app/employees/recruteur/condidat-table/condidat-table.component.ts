import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interviewList } from 'src/app/Models/interviews';
import { OffreComponent } from '../../../details-offre/offre/offre.component';
import { InterviewsService } from 'src/app/Services/interviews.service';
import { OffresService } from 'src/app/Services/offers.service';
import { DetailsCondidatComponent } from '../details-condidat/details-condidat.component';
import { condidat } from 'src/app/Models/condidat';
import { CvService } from 'src/app/Services/cv.service';
import { CondidatService } from 'src/app/Services/condidat.service';

@Component({
  selector: 'app-condidat-table',
  templateUrl: './condidat-table.component.html',
  styleUrls: ['./condidat-table.component.css']
})
export class CondidatTableComponent implements OnInit {

  public nb?:number;
  interviewList?:interviewList[];
  id?:number;
  constructor(
    private dialog :MatDialog,
    private interviewServ : InterviewsService,
  ) { }


  ngOnInit(): void {
    this.getListInterview();
  }
  getListInterview(){
    this.interviewServ.getInterviewsList().subscribe(ListInterview =>{
      this.interviewList = ListInterview;
      this.nb = this.interviewList.length;
       console.log(this.nb);
       console.log(this.interviewList[1].user?.pdfcv);
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
