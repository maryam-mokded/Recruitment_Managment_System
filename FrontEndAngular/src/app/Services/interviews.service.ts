import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interviewList } from '../Models/interviews';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  private baseUrl = 'http://localhost:3800/Interview';
  constructor(private http: HttpClient) { }

  getInterviewsList(): Observable<interviewList[]> {
    return this.http.get<interviewList[]>(`${this.baseUrl}`);
   }
  getInterviews(id: number): Observable<interviewList> {
    return this.http.get<interviewList>(`${this.baseUrl}/${id}`);
  }

   createInterviews(interviews: Object): Observable<Object> {
     return this.http.post(`${this.baseUrl}`, interviews);
   }

   updateInterviews(id: number, value: any): Observable<Object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }

   deleteInterviews(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
   }

  
}
