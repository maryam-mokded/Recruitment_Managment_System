import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../../Services/questions.service';
import { questionList } from '../../../Models/questions';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { UpdateQuestionComponent } from '../update-question/update-question.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
 
  questions! : questionList[];

  constructor(  private dialog :MatDialog, private questionsService: QuestionsService , private router: Router ) {
   }

  ngOnInit(): void {
    this.loadList();
  }

  loadList()
  {
    this.questionsService
    .getQuestionsList()
    .subscribe(o =>
      {  this.questions = o;
      });
  }

  onOpenDialogCreate():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateQuestionComponent, dialogConfig);
  }

 
  onOpenDialogUpdate(data:questionList):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Question', JSON.stringify(data));
    this.dialog.open(UpdateQuestionComponent, dialogConfig);
  }

  deleteQuestions(id: number) {
    let confirmation =confirm("Do you really want to delete this question ?")
    if(confirmation)
    this.questionsService.deleteQuestions(id)
    .subscribe(o =>{        
      this.questions = o;
      this.loadList();
    });
}
questionDetails(id: number){
  this.router.navigate(['employees/interviewer//detailquestion', id]);
}

// updateQuestions(id: number){
//   this.router.navigate(['employees/interviewer//updatequestion', id]);
// }



}
