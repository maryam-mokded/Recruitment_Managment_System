import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interviewList } from 'src/app/Models/interviews';
import { OffreComponent } from '../../../details-offre/offre/offre.component';
import { InterviewsService } from 'src/app/Services/interviews.service';
import { DetailsCondidatComponent } from '../details-condidat/details-condidat.component';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-condidat-table',
  templateUrl: './condidat-table.component.html',
  styleUrls: ['./condidat-table.component.css']
})
export class CondidatTableComponent implements OnInit {

  public nb?:number;
  interviewsList:interviewList[]=[];
  idNumber:number=0;

  constructor(
    private CvServ : CvService,
    private dialog :MatDialog,
    private interviewServ : InterviewsService,
  ) { }

  ngOnInit(): void {
    this.getListInterview();
  }

  getListInterview(){
    this.interviewServ.getInterviewsList().subscribe(ListInterview =>{
      var _j=0;
      for (var _i = 0; _i < ListInterview.length; _i++) {
        if(ListInterview[_i].test == 0){
          this.interviewsList[_j] = ListInterview[_i];
          _j++
          console.log(this.interviewsList)
        }else{
          console.log('Test = 1 ')
        }
      }
    });
  }

  PasserAuInterview(Interview:interviewList){
    Interview.test = 1;
    this.interviewServ.updateInterviews(Interview.id_Interview,Interview).subscribe(o=>{
      window.location.reload();
      console.log(Interview);
    });
  }

  deleteCondidat(interview:interviewList){
    let confirmation =confirm("Êtes-vous sûr de supprimer Ce Condidat ??")
    if(confirmation)
    this.interviewServ.deleteInterviews(interview.id_Interview).subscribe(()=>{
      window.location.reload();
      console.log("Interview supprimé");
    });
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

  DownLoadCv(IdCvCondidat?:number){
    console.log(IdCvCondidat);

    this.CvServ.downloadCv(IdCvCondidat).subscribe(cv =>{
        console.log(IdCvCondidat);
        console.log("download successfulyy");
         },
          error=>{
            // alert("Failed to download cv !")
          }

         );
      }

}
