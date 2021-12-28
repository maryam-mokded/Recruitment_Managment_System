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

  UrlApi : string = 'http://localhost:3800/offers';

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
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Offers>(this.UrlApi,o ,{headers:httpHeaders});
  }

  ConsulterOffer(id:number):Observable<Offers>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    const url = `${this.UrlApi}/${id}`
    return this.http.get<Offers>(url);
  }

  supprimerOffer(id:number){
    let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,{headers:httpHeaders});
  }

  modifierOffer(o :Offers):Observable<Offers>{
    let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    const url =`${this.UrlApi}/${o.idOffre}`;
    return this.http.put<Offers>(url,o,{headers:httpHeaders});
  }

}
