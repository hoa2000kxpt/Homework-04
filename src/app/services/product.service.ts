import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  updateProduct(id: any, data: any ) {
    return this.http.put(this.url + "/" + id, data);
  }
}
