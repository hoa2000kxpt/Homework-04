import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from "@angular/platform-browser";

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
  title: string = "Admin Page"


  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle("Admin Page");
  }

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
