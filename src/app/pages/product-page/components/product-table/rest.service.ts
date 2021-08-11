import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/model/products';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/products";

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }

  deleteProduct(id: any) {
    return this.http.delete(this.url + '/' +  id);
  }
}
