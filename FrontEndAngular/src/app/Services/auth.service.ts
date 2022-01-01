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

  // apiURL: string = 'http://localhost:8081/users';
  apiURL : string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


public loggedUser?: string;
public isloggedIn: Boolean  = false;
public roles?:string[];
role?:string;
token?: any;
private helper = new JwtHelperService();

constructor(
  private httpClient: HttpClient,
  public router: Router,
  private localStorageService: LocalStorageService
) {
  this.isloggedIn = this.getAccessToken() ? true : false;
 }

 login(employee: Employee) {
  return this.httpClient.post<any>(`${this.apiURL}/login`, employee)
    .subscribe((res: any) => {
      this.isloggedIn = true;
      this.localStorageService.set('access_token', res.token);
      this.router.navigate(['/' + res.idUser]);
      // this.getEmployeeProfile(res.EmployeeId).subscribe((res) => {
      //   this.localStorageService.set('Employee', {email: res.email, id: res._id, name: res.name});
      // })
    })
}

  // saveToken(jwt:string){
  //   localStorage.setItem('jwt',jwt);
  //   this.token = jwt;
  //   this.isloggedIn = true;
  //   this.decodeJWT();
  // }

  // decodeJWT()
  // {   if (this.token == undefined){
  //   this.router.navigate(['/']);
  //   //this.router.navigate(['/login']);
  // }

  //   const decodedToken = this.helper.decodeToken(this.token);
  //   this.roles = decodedToken.roles;
  //   this.loggedUser = decodedToken.sub;
  // }



  // loadToken() {
  //   this.token = localStorage.getItem('jwt');
  //   this.decodeJWT();
  // }

  // getToken():string {
  //   return this.token;
  // }

  // logout() {
  //   this.loggedUser = undefined;
  //   this.roles = undefined;
  //   this.token= undefined;
  //   this.isloggedIn = false;
  //   localStorage.removeItem('jwt');
  //   this.router.navigate(['/login']);
  // }

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
    this.isloggedIn = false;
    this.router.navigate(['/']);
  }



  isAdmin():Boolean{
    if (!this.roles)
        return false;
  return this.roles.indexOf('ADMIN') >=0;
 
  }

  isInterviewer():Boolean{
    if (!this.roles)
        return false;
  return this.roles.indexOf('INTERVIEWER') >=0;
  }

  isRecruteur():Boolean{
    if (!this.roles)
        return false;
  return this.roles.indexOf('RECRUTEUR') >=0;
  }


  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    console.log(login);
    this.getUserRoles(login);
  }

  getUserRoles(login : string){

  }

  getRole():any {
    if(this.isUser())
    this.role="USER"
    if(this.isAdmin())
    this.role="ADMIN"
    if(this.isRecruteur())
    this.role="RECRUTEUR"
    if(this.isInterviewer())
    this.role="INTERVIEWER"
    return this.role;

}
}