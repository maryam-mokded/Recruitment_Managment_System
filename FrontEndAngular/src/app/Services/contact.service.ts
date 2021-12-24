import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactList } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:3800/contact';

  constructor(private http: HttpClient) { }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createContact(contact: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contact);
  }


  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getContactList(): Observable<contactList[]> {
    return this.http.get<contactList[]>(`${this.baseUrl}`);
  }
}
