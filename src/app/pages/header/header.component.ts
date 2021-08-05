import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthService) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
