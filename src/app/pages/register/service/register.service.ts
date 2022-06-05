import { Injectable } from '@angular/core';
import { endpoint } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  // config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  postNewUser(body: User): Observable<any> {
    const headers = {
      'Content-Type' : 'application/json; charset=UTF-8'
  }
    console.log(body, 'desde angular');

    return this.http.post(endpoint.serverNode, body, {headers});
  }

  getUsers(): Observable<any> {
    const headers = {
      'Content-Type' : 'application/json; charset=UTF-8'
  }

    return this.http.get(endpoint.serverNode, {headers});
  }
}
