import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interviewList } from '../Models/interviews';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  private baseUrl = 'http://localhost:3000/api/interview';
  // private baseUrl2 = 'http://localhost:3800/getInters';

  constructor(private http: HttpClient,private authService : AuthService) { }

  getInterviewsList(): Observable<interviewList[]> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<interviewList[]>(`${this.baseUrl}`);
   }

  getInterviews(id: any): Observable<interviewList> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<interviewList>(`${this.baseUrl}/${id}`);
  }

   createInterviews(interviews: Object): Observable<Object> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     return this.http.post(`${this.baseUrl}`, interviews );
   }

   updateInterviews(id: any, value: any): Observable<Object> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     return this.http.put(`${this.baseUrl}/${id}`, value );
   }

   deleteInterviews(id: any): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
     return this.http.delete(`${this.baseUrl}/${id}` );
   }

  //  getInters(): Observable<any> {
  //   return this.http.get(`${this.baseUrl2}`);
  // }

}
