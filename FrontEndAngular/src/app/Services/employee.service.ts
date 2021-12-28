import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = 'http://localhost:3800/user';
  baseUrl2 : string ='http://localhost:3800/getUsers';
  baseUrl3 : string = 'http://localhost:3800/getCondidats';
  baseUrl4 : string = 'http://localhost:3800/getInters';
  baseUrl5 : string = 'http://localhost:3800/getNbUsers';
  baseUrl6 : string =  'http://localhost:3800/getClassName';


  constructor(private http: HttpClient,private authService : AuthService) { }


  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.get(url,{headers:httpHeaders});
    // return this.http.get<Offers[]>(this.UrlApi,{headers:httpHeaders});
  }

  createEmployee(employee: Object): Observable<Object> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.post(this.baseUrl, employee,{headers:httpHeaders});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.put(url, value,{headers:httpHeaders});
  }

  

  deleteEmployee(id: number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.delete(url, {headers:httpHeaders});
 
  }

  getEmployeesList(): Observable<Employee[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get<Employee[]>(this.baseUrl, {headers:httpHeaders});
    // return this.http.get<Offers[]>(this.UrlApi,{headers:httpHeaders});
  }

  getUsers(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl2}`);
  }

  getCondidats(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl3}`);
  }

  getInters(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl4}`);
  }

  getNbUsers(): Observable<any[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get<any[]>(`${this.baseUrl5}`);
  }


  getClassName(id: number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl6}/${id}`, {headers:httpHeaders});
  }

}
