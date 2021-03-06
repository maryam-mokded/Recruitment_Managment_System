import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questionnaire } from '../Models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  private baseUrl = 'http://localhost:3000//api/questionnaire';

  constructor(private http: HttpClient) { }
  getQuestionnaireList(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.baseUrl}`);
   }
  getQuestionnaire(id: any): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(`${this.baseUrl}/${id}`);
  }

   createQuestionnaire(questionnaire: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, questionnaire);
   }

   updateQuestionnaire(id: any, value: any): Observable<Object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }

   deleteQuestionnaire(id: any): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
   }


}
