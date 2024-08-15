import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { promises } from 'nodemailer/lib/xoauth2';

interface AuthResponse {
  token: string;
  user: User;
}
function isAuthResponse(response: any): response is AuthResponse {
  return response && response.token && response.user;
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  loggedIn = false;
  url = "http://localhost:3000/Api"
  constructor(private httpClient : HttpClient) { }
  
  getAll() {
    return this.httpClient.get(`${this.url}/user`);
  }
  
  get(id: string) {
    return this.httpClient.get(`${this.url}/user/${id}`);
  }
  
  save(user: User) {
    return this.httpClient.post(`${this.url}/user`, user);
  }
  
  update(email: any, user: User) {
    return this.httpClient.put(`${this.url}/user/${email}`, user);
  }

  getEmail(email: string) {
    return this.httpClient.get(`${this.url}/user/${email}`);
  }

checkpass(user: User): Observable<AuthResponse> {
  return this.httpClient.post(`${this.url}/user/login`, user)
    .pipe(
      map(response => {
        if (isAuthResponse(response)) {
          return {
            token: response.token,
            user: response.user
          };
        } else {
          throw new Error('Invalid response format');
        }
      })
    );

;
  }

  register(user: User) {
    return this.httpClient.post(`${this.url}/user/register`,user);
  }

  delete(id: string, user: User) {
    return this.httpClient.delete(`${this.url}/user/${id}`);
  }

  checkLogin() {
    let jsonData = localStorage.getItem('login');
    if(jsonData){
      return JSON.parse(jsonData);
    }
    return false
  }


  sendmail(user: User) {
    return this.httpClient.post(`${this.url}/sendmail`,user);
  }


 isAuthenticated() {
  const promise = new Promise<boolean>((resolve, reject) => {
    let jsonData = localStorage.getItem('login');
    if(jsonData){
      this.loggedIn = true
      resolve(this.loggedIn)
    }else{
      resolve(this.loggedIn)
    }
  })
  return promise
 }

 
 isAdmin() {
  const promise = new Promise<boolean>((resolve, reject) => {
    let jsonData = localStorage.getItem('isAdmin');
    if(jsonData){
      if(JSON.parse(jsonData) == 1) {
        this.loggedIn = true
        resolve(this.loggedIn)
      }
     
    }else{
      resolve(this.loggedIn)
    }
  })
  return promise
 }


//  getToken(){
//   let jsonData = localStorage.getItem('token');
//   if(jsonData){
//     return JSON.parse(jsonData)
//   }
//  }


//  get_reToken(){
//   let jsonData = localStorage.getItem('re_token');
//   if(jsonData){
//     return JSON.parse(jsonData)
//  }
//  return false
//  }


 
}
