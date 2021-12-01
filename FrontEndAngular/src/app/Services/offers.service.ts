import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { Offers } from '../Models/offers';

// const httpOptions ={
//   headers: new HttpHeaders({'Content-Type' : 'application/json'})
// }

@Injectable({
  providedIn: 'root'
})

export class OffresService {

  UrlApi : string = 'http://localhost:3800/offers';

//  offers? : Offers[];

  constructor(private http : HttpClient) {
  }

  ListeOffers(): Observable<Offers[]>{
    return this.http.get<Offers[]>(this.UrlApi);
  }

  ConsulterOffer(id:number):Observable<Offers>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Offers>(url);
  }


}
