import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewsService } from '../../../Services/interviews.service';
import { interviewList } from '../../../Models/interviews';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InterviewDetailsComponent } from '../interview-details/interview-details.component';
import { QuestionnaireDetailsComponent } from '../questionnaire-details/questionnaire-details.component';
import { CreateInterviewComponent } from '../create-interview/create-interview.component';
import { UpdateInterviewComponent } from '../update-interview/update-interview.component';
import { QuestionsService } from '../../../Services/questions.service';
import { questionList } from 'src/app/Models/questions';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.css'],
})
export class InterviewsListComponent implements OnInit {
  TestType: boolean = false;
  interviews: interviewList[] = [];
  questions!: questionList[];

  constructor(
    private dialog: MatDialog,
    private interviewsService: InterviewsService,
    private questionsService: QuestionsService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadList();
    //console.log(this.interviews);
  }

  loadList() {
    this.interviewsService.getInterviewsList().subscribe((ListInterview) => {
      var _j = 0;
      for (var _i = 0; _i < ListInterview.length; _i++) {
        if (ListInterview[_i].test == 1) {
          this.interviews[_j] = ListInterview[_i];
          _j++;
          console.log(this.interviews);
        } else {
          console.log('Test = 1 ');
        }
      }
    });
  }

  deleteInterviews(id: number) {
    let confirmation = confirm('Do you really want to delete this interview ?');
    if (confirmation)
      this.interviewsService.deleteInterviews(id).subscribe((o) => {
        //this.interviews = o;
        window.location.reload();
      });
  }

  PasserAuTechnicalAuInterview(data: interviewList) {
    data.interviewType = 'technique';
    console.log(data)
    this.interviewsService.updateInterviews(data.id_Interview,data)
    .subscribe(() => {

      // this.interview = new interviewList();
      window.location.reload();
  });
  }
  interviewDetails(data: interviewList) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('interview', JSON.stringify(data));
    this.dialog.open(InterviewDetailsComponent, dialogConfig);
  }
  PasserInterviewNow(data:interviewList){ 
    //redirection au page  du quiz
    this.router.navigate(['/employees/interviewer/quiz']);
  }
  questionDetails(data: interviewList) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('id_Interview', JSON.stringify(data.id_Interview));
    // localStorage.setItem('id_Question', JSON.stringify(data.questionnaire));

    this.dialog.open(QuestionnaireDetailsComponent, dialogConfig);
  }

  refrech() {
    window.location.reload();
  }

  onOpenDialogCreate(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateInterviewComponent, dialogConfig);
  }

  onOpenDialogUpdate(data: interviewList): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('interview', JSON.stringify(data));
    this.dialog.open(UpdateInterviewComponent, dialogConfig);
    // console.log(data);
  }
}
