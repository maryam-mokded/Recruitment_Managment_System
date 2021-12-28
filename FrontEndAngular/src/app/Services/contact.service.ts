import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactList } from '../Models/contact';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:3800/contact';

  constructor(private http: HttpClient,private authService : AuthService) { }

  getContact(id: number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get(`${this.baseUrl}/${id}`,{headers:httpHeaders});
  }

  createContact(contact: Object): Observable<Object> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post(`${this.baseUrl}`, contact,{headers:httpHeaders});
  }


  deleteContact(id: number): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    // return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    return this.http.delete(`${this.baseUrl}/${id}`,{headers:httpHeaders});
  }

  getContactList(): Observable<contactList[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.get<contactList[]>(`${this.baseUrl}`,{headers:httpHeaders});
    // return this.http.get<condidat[]>(this.UrlApi,{headers:httpHeaders});
  }
}
