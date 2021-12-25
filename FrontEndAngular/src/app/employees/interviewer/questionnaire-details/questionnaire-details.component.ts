import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../../Services/questionnaire.service';
import { MatDialog } from '@angular/material/dialog';
import { Questionnaire } from 'src/app/Models/questionnaire';

@Component({
  selector: 'app-questionnaire-details',
  templateUrl: './questionnaire-details.component.html',
  styleUrls: ['./questionnaire-details.component.css']
})
export class QuestionnaireDetailsComponent implements OnInit {

  questionnaireList: Questionnaire[]=[];
  id_Interview ! : number ;
  constructor(private dialogClose: MatDialog,private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    // this.questionnaire = new Questionnaire();

    this.id_Interview =JSON.parse(localStorage.getItem('id_Interview') || '[]') || [];
    console.log(this.id_Interview);
    this.getQuestionnaireList();
  }

  getQuestionnaireList(){
  this.questionnaireService.getQuestionnaireList().subscribe(o =>{
  this.questionnaireList = o;
  console.log(this.questionnaireList);
});
  }


  closeDetails(){
    this.dialogClose.closeAll();
  }

}
