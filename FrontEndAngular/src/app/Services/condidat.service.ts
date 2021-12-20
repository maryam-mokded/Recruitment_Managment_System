import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { condidat } from '../Models/condidat';

//Pour dire que c'est un json
const httpOptions ={
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  UrlApi : string = 'http://localhost:3800/condidats';

  constructor(private http : HttpClient) { }

  /*
  ListeCondidats(): Observable<condidat[]>{
    return this.http.get<condidat[]>(this.UrlApi);
  }
*/
  ConsulterCondidat(id:number):Observable<condidat>{
    const url = `${this.UrlApi}/${id}`
    return this.http.get<condidat>(url);
  }



  AjouterCondidat(cond:condidat):Observable<condidat>{
    return this.http.post<condidat>(this.UrlApi,cond,httpOptions);
  }

  supprimerCondidat(id:number){
    const url =`${this.UrlApi}/${id}`;
    return this.http.delete(url,httpOptions);
  }

  modifierCondidat(cond :condidat):Observable<condidat>{
    const url =`${this.UrlApi}/${cond.idUser}`;
    return this.http.put<condidat>(url,cond,httpOptions);
  }

}
