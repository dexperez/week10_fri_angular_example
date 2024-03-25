import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class RESTApiServiceService {

  private BASE_URL = "https://reqres.in";

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/api/users?page=2`);
  }

}
