import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  opened = false;
  openedInsertUser = false;
  openedEditUser = false;
  userList: Array<any> = [];

    
    constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(
      (res: any) => {
        console.log(res);
        this.userList = res;
      }
    );
  }

  addUser(user: any) {
    this.userList.push(JSON.parse(JSON.stringify(user)));
  }


}
