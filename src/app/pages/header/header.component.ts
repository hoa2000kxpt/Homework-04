import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userList:any = [];

  constructor(public authenticationService: AuthService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(
      (res: any) => {
        this.userList = res;
        console.log((res[0].fullname));
       
      }
    );
  }

  logout() {
    this.authenticationService.logout();
  }

}
