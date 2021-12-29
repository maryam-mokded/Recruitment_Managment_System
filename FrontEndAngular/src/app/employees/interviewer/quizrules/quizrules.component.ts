import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quizrules',
  templateUrl: './quizrules.component.html',
  styleUrls: ['./quizrules.component.css']
})
export class QuizrulesComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
