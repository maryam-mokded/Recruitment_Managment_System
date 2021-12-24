import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3800/user';
  private baseUrl2 = 'http://localhost:3800/getUsers';
  private baseUrl3 = 'http://localhost:3800/getCondidats';
  private baseUrl4 = 'http://localhost:3800/getInters';
  private baseUrl5 = 'http://localhost:3800/getNbUsers';


  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }

  getCondidats(): Observable<any> {
    return this.http.get(`${this.baseUrl3}`);
  }

  getInters(): Observable<any> {
    return this.http.get(`${this.baseUrl4}`);
  }

  getNbUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl5}`);
  }

}
