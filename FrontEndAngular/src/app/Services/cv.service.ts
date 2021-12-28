import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { Cv } from '../Models/Cv';
import { AuthService } from './auth.service';

//Pour dire que c'est un json
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CvService {

  UrlApi : string = 'http://localhost:3800/cv/downloadCV';

  constructor(
    private http : HttpClient,private authService : AuthService
    ) { }


  downloadCv(id?:number):Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;

    const url = `${this.UrlApi}/${id}`
    return this.http.get(url,{headers:httpHeaders});
  }


}
