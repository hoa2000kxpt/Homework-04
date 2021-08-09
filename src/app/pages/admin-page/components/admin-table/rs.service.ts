import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class RsService {
  users: User[] = [];
  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  deleteUser(id: any) {
    return this.http.delete(this.url + '/users/' +  id);
  }



}
