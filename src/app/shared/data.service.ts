import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public API = "https://swapi.dev/api/people";
  constructor( private httpClient: HttpClient) { 
    console.log(DataService);
  }

  getAll():Observable<any>{
    return this.httpClient.get(this.API)
  }
  
  get(id: string) {
    return this.httpClient.get(this.API + '/' + id);
  }
  
}
