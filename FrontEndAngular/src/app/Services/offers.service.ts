import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { Offers } from '../Models/offers';
import { AuthService } from './auth.service';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class OffresService {

  UrlApi : string = 'http://localhost:3000/api/offers';
  UrlApi1 : string = 'http://localhost:3000/api/offer';


//  offers? : Offers[];

  constructor(private http : HttpClient,private authService : AuthService) {
  }

  ListeOffers(): Observable<Offers[]>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Offers[]>(this.UrlApi);
  }

  AjouterOffer(o:Offers):Observable<Offers>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Offers>(this.UrlApi1,o );
  }

  ConsulterOffer(id:any):Observable<Offers>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    //let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.UrlApi1}/${id}`
    return this.http.get<Offers>(url);
  }

  supprimerOffer(id:any){
    // let jwt = this.authService.getToken();
    //   jwt = "Bearer "+jwt;
    //   let httpHeaders = new HttpHeaders({"Authorization":jwt})
     const url =`${this.UrlApi1}/${id}`;
    return this.http.delete(url);
  }

  modifierOffer(o :Offers):Observable<Offers>{
    // let jwt = this.authService.getToken();
    //     jwt = "Bearer "+jwt;
    //     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     const url =`${this.UrlApi1}/${o._id}`;
    return this.http.put<Offers>(url,o);
  }

}
