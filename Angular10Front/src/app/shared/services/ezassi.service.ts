import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Ezassi } from '../models/ezassi';

@Injectable({
  providedIn: 'root'
})
export class EzassiService {
  url = environment.baseUrl

  constructor(private http:HttpClient) { }
  

  getData():Observable<any>{
    return this.http.get(this.url)
  }
  create(ezassi:any):Observable<any>{
    return this.http.post(this.url, ezassi)
  }
  update(id:number, ezassi:Ezassi):Observable<any>{
    return this.http.put((this.url + '/' + id), ezassi)
  }
  delete(id:number):Observable<any>{
    return this.http.delete(this.url + '/'+ id)
  }

}
