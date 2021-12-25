import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
}
