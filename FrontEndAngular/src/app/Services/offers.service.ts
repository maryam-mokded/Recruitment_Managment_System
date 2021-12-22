import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { Offers } from '../Models/offers';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

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

  AjouterOffer(o:Offers):Observable<Offers>{
    return this.http.post<Offers>(this.UrlApi,o,httpOptions);
  }

  ConsulterOffer(id:number):Observable<Offers>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Offers>(url);
  }

  supprimerOffer(id:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }

  modifierOffer(o :Offers):Observable<Offers>{
    const url =`${this.UrlApi}/${o.idOffre}`;
    return this.http.put<Offers>(url,o,httpOptions);
  }

}
