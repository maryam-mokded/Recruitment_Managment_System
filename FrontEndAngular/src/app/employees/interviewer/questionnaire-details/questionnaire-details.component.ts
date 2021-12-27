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
    console.log(this.questionnaireList);
  }

  getQuestionnaireList(){
  this.questionnaireService.getQuestionnaireList().subscribe(o =>{
    var _j=0;
    for (var _i = 0; _i < o.length; _i++) {
     if(o[_i].interview.id_Interview == this.id_Interview){
       this.questionnaireList[_j] = o[_i];
       console.log(this.questionnaireList[_j]);
       _j++
    }
    }
  // this.questionnaireList = o;

});
  }


  closeDetails(){
    this.dialogClose.closeAll();
  }

}
