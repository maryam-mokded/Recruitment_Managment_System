import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuizService } from '../../../Services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public name : string="";
  public questionsList : any = [];
  public currentQuestion: number = 0 ;
  public points : number = 0;
  counter = 60 ;
  correctAnswer:number = 0;
  incorrectAnswer : number = 0 ;
  interval$:any;
  progress:string="0";
  isQuizCompleted : boolean = false;

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
    this.quizService.getQuestionJson().subscribe
    ( res=>{
      this.questionsList = res.questions;
    })
  }

  nextQuestion(){
this.currentQuestion++;
  }

  previousQuestion(){
this.currentQuestion--;
  }

  answer(currentQuestion:number,option:any){
    if(currentQuestion === this.questionsList.length){
      this.isQuizCompleted = true ;
      this.stopCounter();
    }
    if (option.correct){
      this.points+=10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.getProgressPercent();
      }, 1000);

    }else{
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      this.points-=10;
    }
  }

startCounter(){
this.interval$ = interval (1000)
.subscribe(val=>{
  this.counter--;
  if(this.counter===0){
    this.currentQuestion++;
    this.counter=60;
    this.points-=10;
  }
});
//the counter will stop after 10 min
setTimeout(() => {
this.interval$.unsubscribe()
},60000);
}
stopCounter(){
this.interval$.unsubscribe();
this.counter=0
}
resetCounter(){
this.stopCounter();
this.counter=60;
this.startCounter();
}

resetQuiz(){
  this.resetCounter();
  this.getAllQuestions();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
  this.progress="0";
}

getProgressPercent(){
  this.progress = ((this.currentQuestion/this.questionsList.length)*100).toString();
  return  this.progress;
}


}
