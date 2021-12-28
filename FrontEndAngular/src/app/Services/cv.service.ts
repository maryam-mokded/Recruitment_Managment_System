import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Cv } from '../Models/Cv';
import { condidat } from '../Models/condidat';

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

    // download(file:number): Observable<Blob> {
    //   const url = `${this.UrlApi}/${file}`
    //   return this.http.get(url, {
    //     responseType: 'blob'
    //   });
    // }
  downloadCv(id?:number):Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) ;

    const url = `${this.UrlApi}/${id}`
    return this.http.get(url,{headers:httpHeaders});
  }

  UploadCv(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const baseUrl : any = "http://localhost:3800/cv/UploadCV";
    const req = new HttpRequest('POST', baseUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  /*
  UploadCv(fileToUpload: File): Observable<Object> {
    const url = "http://localhost:3800/cv/UploadCV"
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(url,formData);
  }*/

}
