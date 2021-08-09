import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  userList: any = [];
  userCurrent: any = "";
  username: string = "";

  constructor(public authenticationService: AuthService, private userService: UserService) {
    this.userCurrent = localStorage.getItem('current-user');
    if (this.userCurrent != null) {
      this.username = JSON.parse(this.userCurrent).username;
      console.log(this.username);
    }
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      res => {
        this.userList = res;
      }
    )

    

    
  }

  ngOnChanges() {
    
  }


  logout() {
    this.authenticationService.logout();
  }

}
