import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interviewList } from 'src/app/Models/interviews';
import { OffreComponent } from '../../../details-offre/offre/offre.component';
import { InterviewsService } from 'src/app/Services/interviews.service';
import { DetailsCondidatComponent } from '../details-condidat/details-condidat.component';
import { CvService } from 'src/app/Services/cv.service';
import { AuthService } from 'src/app/Services/auth.service';
// import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-condidat-table',
  templateUrl: './condidat-table.component.html',
  styleUrls: ['./condidat-table.component.css'],
})
export class CondidatTableComponent implements OnInit {

  intervalId?:any;
  idContenu?: string;
  idTitle?: string;
  Toast!: string[];
  counter: number = 0;
  ShowToast: string = 'hide';

  public nb?: number;
  interviewsList: interviewList[] = [];
  idNumber: number = 0;

  constructor(
    private CvServ: CvService,
    private dialog: MatDialog,
    private interviewServ: InterviewsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getListInterview();
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



  // downloadFile(fileData?:interviewList ): void {
  //   this.CvServ
  //     .download(fileData.user?.pdfcv.idCV)
  //     .subscribe(blob => fileSaver(blob, fileData.filename));
  // }


  DetailsCondidat(interview: interviewList) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Condidat', JSON.stringify(interview.user));
    this.dialog.open(DetailsCondidatComponent, dialogConfig);
  }

  DetailsOffer(interview: interviewList): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('IdOffer', JSON.stringify(interview.offre?.idOffre));
    this.dialog.open(OffreComponent, dialogConfig);
  }

  getListInterview() {
    this.interviewServ.getInterviewsList().subscribe((ListInterview) => {
      var _j = 0;
      for (var _i = 0; _i < ListInterview.length; _i++) {
        if (ListInterview[_i].test == 0) {
          this.interviewsList[_j] = ListInterview[_i];
          _j++;
          console.log(this.interviewsList);
        } else {
          console.log('Test = 1');
        }
      }
    });
  }

  PasserAuInterview(Interview: interviewList) {
    Interview.test = 1;
    Interview.interviewType="RH"
    this.interviewServ
      .updateInterviews(Interview.id_Interview, Interview)
      .subscribe(
        (o) => {
          this.Toast[0] = 'Success';
          this.Toast[1] =
            'condidat ' +
            Interview.user?.nom +
            ' ' +
            Interview.user?.prenom +
            ' passes to interview successfully';
          localStorage.setItem('Toast', JSON.stringify(this.Toast));
          window.location.reload();
        },
        (error) => {
          this.idContenu = 'TostDangerContenu';
          this.idTitle = 'TostDangerTile';
          this.Toast[0] = 'Failed';
          this.Toast[1] =
            'Condidat ' +
            Interview.user?.nom +
            ' ' +
            Interview.user?.prenom +
            ' passes to interview failed';
          this.showToast();
        }
      );
  }

  deleteCondidat(interview: interviewList) {
    this.interviewServ.deleteInterviews(interview.id_Interview).subscribe(
      () => {
        this.Toast[0] = 'Success';
        this.Toast[1] =
          'the Condidat ' +
          interview.user?.nom +
          ' ' +
          interview.user?.prenom +
          ' was successfully removed';
        localStorage.setItem('Toast', JSON.stringify(this.Toast));
      },
      (error) => {
        this.idContenu = 'TostDangerContenu';
        this.idTitle = 'TostDangerTile';
        this.Toast[0] = 'Failed';
        this.Toast[1] =
          'Remove ' +
          interview.user?.nom +
          ' ' +
          interview.user?.prenom +
          ' condidat failed';
        this.showToast();
      }
    );
  }
  DownLoadCv(interview: interviewList) {

    var idCv = interview.user?.pdfcv.idCV
    console.log(idCv)
    this.CvServ
        .downloadCv(idCv)
        .subscribe();
  }
 /* DownLoadCv(interview: interviewList) {
    console.log(interview.user?.pdfcv.idCV);
    this.CvServ.downloadCv(interview.user?.pdfcv?.idCV).subscribe(
      (cv) => {
        this.Toast[0] = 'Success';
        this.Toast[1] =
          'Download Cv ' +
          interview.user?.nom +
          ' ' +
          interview.user?.prenom +
          ' Successfully';
        localStorage.setItem('Toast', JSON.stringify(this.Toast));
      },
      (error) => {
        this.idContenu = 'TostDangerContenu';
        this.idTitle = 'TostDangerTile';
        this.Toast[0] = 'Failed';
        this.Toast[1] =
          'Failed to download cv ' +
          interview.user?.nom +
          ' ' +
          interview.user?.prenom;
        this.showToast();
      }
    );
  }*/

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
}
