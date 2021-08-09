import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.url);
  }
  
  getCurrentUser(id: any): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  updateUser(id: any, data: any) {
    return this.http.put(this.url + "/" + id, data);
  }
}
