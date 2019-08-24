import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) {}
 
    loginApi(userCred) {
      let body = JSON.stringify(userCred);
      return this.http.post('http://localhost:3000/login/', body, httpOptions);
    }

    registerApi(userData) {
      console.log(userData)
      let body = JSON.stringify(userData);
      return this.http.post('http://localhost:3000/userSignup/', body, httpOptions);
    }
}
