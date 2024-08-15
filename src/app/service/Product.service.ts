import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:3000/Api"
constructor(private httpClient : HttpClient) { }

getAll() {
  return this.httpClient.get(`${this.url}/products`);
}

get(id: string) {
  return this.httpClient.get(`${this.url}/products/${id}`);
}

save(Product: Product) {
  return this.httpClient.post(`${this.url}/products`, Product);
}

update(id: string, Product: Product) {
  return this.httpClient.put(`${this.url}/products/${id}`, Product);
}

delete(id: string, product: Product) {
  return this.httpClient.delete(`${this.url}/products/${id}`);
}
keyword(params: any) {
  let query = ''
  if(params.keyword){
    query = `${params.keyword}`
  }else if(params.category){
    query = `${params.category}`
  }
  return this.httpClient.get(`${this.url}/products/search/${query}`)
}
}
