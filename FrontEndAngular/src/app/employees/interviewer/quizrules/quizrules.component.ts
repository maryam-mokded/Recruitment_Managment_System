import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-quizrules',
  templateUrl: './quizrules.component.html',
  styleUrls: ['./quizrules.component.css']
})
export class QuizrulesComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
