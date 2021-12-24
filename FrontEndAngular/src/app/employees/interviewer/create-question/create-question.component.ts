import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionList } from '../../../Models/questions';
import { QuestionsService } from '../../../Services/questions.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  myForm!:FormGroup;
  question: questionList = new questionList();
  submitted = false;
  
  constructor(   private dialogClose: MatDialog, private questionsService: QuestionsService, private router: Router ) {
   }

  ngOnInit(): void {
    this.ValidatedForm();
  }
  newQuestion(): void {
    this.submitted = false;
    this.question = new questionList();
  }

  save() {
    this.question.id_Question = 1;
    this.questionsService
    .createQuestions(this.question).subscribe(data => {
      console.log(data)
      this.question = new questionList();
      this.dialogClose.closeAll();
      window.location.reload();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/questionList']);
  }

  onClose() {
    this.dialogClose.closeAll();
  }


  ValidatedForm(){
    this.myForm = new FormGroup({
      'question' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]),
  });
 }

 get Question(){
  return this.myForm.get('question') ;
}




}
