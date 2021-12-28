import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { competance } from '../Models/Competance';

//Pour dire que c'est un json
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CompetanceService {

  UrlApi : string = 'http://localhost:3800/competance';

  constructor(private http : HttpClient) { }

  ListeCompetances(): Observable<competance[]>{
    return this.http.get<competance[]>(this.UrlApi);
  }

  ConsulterCompetance(id:number):Observable<competance>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<competance>(url);
  }

  AjouterCompetance(comp?:competance,id?:number):Observable<competance>{
    const url = `${this.UrlApi}/${id}`
    return this.http.post<competance>(url,comp,httpOptions);
  }

  supprimerCompetance(id?:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }

  modifierCompetance(comp :competance):Observable<competance>{
    const url =`${this.UrlApi}/${comp.idCompetance}`;
    return this.http.put<competance>(url,comp,httpOptions);
  }


}
