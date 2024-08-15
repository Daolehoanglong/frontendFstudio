import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { UserService } from './user.service';
@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = "http://localhost:3000/Api"
constructor(private httpClient : HttpClient, private auth : UserService) { }

getAll() {
  // const headers = {'Authorization': 'Bearer ' + this.auth.getToken()}
  return this.httpClient.get(`${this.url}/categories` );
}

get(id: string) {
  return this.httpClient.get(`${this.url}/categories/${id}`);
}

save(category: Category) {
  return this.httpClient.post(`${this.url}/categories`, category);
}

update(id: string, category: Category) {
  return this.httpClient.put(`${this.url}/categories/${id}`, category);
}

delete(id: string, category: Category) {
  return this.httpClient.delete(`${this.url}/categories/${id}`);
}

}


