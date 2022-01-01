import { Injectable, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  HttpHeaders,HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../Models/employee';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // apiURL: string = 'http://localhost:8081/Employees';
  // apiURL :string = 'http://localhost:3800';
  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public isLoggedIn:boolean = false;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.isLoggedIn = this.getAccessToken() ? true : false;
   }



  login(employee: Employee) {
    return this.httpClient.post<any>(`${this.API_URL}/login`, employee)
      .subscribe((res: any) => {
        this.isLoggedIn = true; 
        this.localStorageService.set('access_token', res.token);
        // this.router.navigate(['profile/' + res.idUser]);
        
        // this.getEmployeeProfile(res.EmployeeId).subscribe((res) => {
        //   this.localStorageService.set('Employee', {email: res.email, id: res._id, name: res.name});
        // })
      })
  }

  getEmployeeProfile(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Object) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let err;
    if (error.error instanceof ErrorEvent) {
      // client-side error
      err = {message: error.error.message};
    } else {
      // server-side error
      err = { code: error.status, message: error.message };
    }
    return throwError(err);
  }

  getAccessToken() {
    return this.localStorageService.get('access_token');
  }

  getEmployeeId() {
    return this.localStorageService.get('Employee').id;
  }

  logout() {
    this.localStorageService.set('access_token', null);
    this.localStorageService.set('Employee', null);
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}