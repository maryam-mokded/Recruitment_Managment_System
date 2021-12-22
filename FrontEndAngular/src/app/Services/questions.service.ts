import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questionList } from '../Models/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private baseUrl = 'http://localhost:3800/Questions';
  constructor(private http: HttpClient) { }

  getQuestionsList(): Observable<questionList[]> {
    return this.http.get<questionList[]>(`${this.baseUrl}`);
   }
  getQuestions(id: number): Observable<questionList> {
    return this.http.get<questionList>(`${this.baseUrl}/${id}`);
  }

   createQuestions(questions: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, questions);
   }

   updateQuestions(id: number, value: any): Observable<Object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }

   deleteQuestions(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
   }

  
}
