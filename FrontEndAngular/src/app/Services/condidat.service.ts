import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { condidat } from '../Models/condidat';
import { AuthService } from './auth.service';

//Pour dire que c'est un json
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  UrlApi : string = 'http://localhost:3000/api/condidat';

  constructor(private http : HttpClient,private authService : AuthService) { }


  ListeCondidats(): Observable<condidat[]>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    
    return this.http.get<condidat[]>(this.UrlApi);
  }

  ConsulterCondidat(id:any):Observable<condidat>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    const url = `${this.UrlApi}/${id}`
    return this.http.get<condidat>(url);
  }

  AjouterCondidat(cond:condidat,id:any):Observable<condidat>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    const url = `${this.UrlApi}/${id}`
    return this.http.post<condidat>(url,cond);
  }

  supprimerCondidat(id:any){
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url);
  }

  modifierCondidat(cond :condidat):Observable<condidat>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer "+jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    const url =`${this.UrlApi}/${cond._id}`;
    return this.http.put<condidat>(url,cond);
  }

}
