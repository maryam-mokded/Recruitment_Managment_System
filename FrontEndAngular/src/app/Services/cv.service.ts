import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../Models/Cv';


//Pour dire que c'est un json
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class CvService {

  UrlApi : string = 'http://localhost:3800/cv';

  constructor(private http : HttpClient) { }

  AjouterCv(cv:string):Observable<Cv>{
     const url ='http://localhost:3800/cv/UploadCV';
    return this.http.post<Cv>(url,cv,httpOptions);
  }


}

