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
  baseUrl : string = 'http://localhost:3000/api/user';
  baseUrl2 : string ='http://localhost:3000/api/getUsers';
  baseUrl3 : string = 'http://localhost:3000/api/getCondidats';
  baseUrl4 : string = 'http://localhost:3000/api/getInters';
  baseUrl5 : string = 'http://localhost:3000/api/getNbUsers';
  baseUrl6 : string =  'http://localhost:3000/api/getClassName';

  apiURL : string = 'http://localhost:3000/api/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');



  constructor(private http: HttpClient,private authService : AuthService) { }


  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.get(url);
    // return this.http.get<Offers[]>(this.UrlApi,{headers:httpHeaders});
  }

  createEmployee(employee: Object): Observable<Object> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.put(url, value);
  }

  

  deleteEmployee(id: number): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    const url = `${this.baseUrl}/${id}`
    return this.http.delete(url);
 
  }

  getEmployeesList(): Observable<Employee[]> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get<Employee[]>(this.baseUrl);
    // return this.http.get<Offers[]>(this.UrlApi,{headers:httpHeaders});
  }

  getUsers(): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl2}`);
  }

  getCondidats(): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl3}`);
  }

  getInters(): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl4}`);
  }

  getNbUsers(): Observable<any[]> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get<any[]>(`${this.baseUrl5}`);
  }


  getClassName(id: number): Observable<any> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;
    return this.http.get(`${this.baseUrl6}/${id}`);
  }

}
