import { Injectable, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // apiURL: string = 'http://localhost:8081/users';
  apiURL :string = 'http://localhost:3800';


public loggedUser?: string;
public isloggedIn: Boolean  = false;
public roles?:string[];
role?:string;
token?: any;
private helper = new JwtHelperService();

  constructor(private router:Router,private http :HttpClient) { }

  login(user : Employee)
  {
  return this.http.post<Employee>(this.apiURL+'/login', user , {observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true; 
    this.decodeJWT(); 
  }
  
  decodeJWT()
  {   if (this.token == undefined){
    this.router.navigate(['/']);
    //this.router.navigate(['/login']);
  }
     
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }
 


  loadToken() {
    this.token = localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken():string {
    return this.token;
  }

  logout() { 
    this.loggedUser = undefined;
    this.roles = undefined;
    this.token= undefined;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);


  }

  

  isAdmin():Boolean{
    if (!this.roles)
        return false;
  return this.roles.indexOf('ADMIN') >=0;
  }

  isUser():Boolean{
    if (!this.roles)
        return false;
  return this.roles.indexOf('ROLE_USER') >=0;
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