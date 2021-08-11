import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/authentication/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userList: any = [];
  userCurrent: any = "";
  username: string = "";
  @Input() title: string = "";

  constructor(public authenticationService: AuthService,
    private userService: UserService,
    private headerService: HeaderService
    ) {
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



    // this.headerService.title.subscribe(title => {
    //   this.title = title;
    // });

    
    // const appTitle = this.titleService.getTitle();
    // this.router
    //   .events.pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => {
    //       const child = this.activatedRoute.firstChild;
    //       if (child!.snapshot.data['title']) {
    //         return child!.snapshot.data['title'];
    //       }
    //       return appTitle;
    //     })
    //   ).subscribe((ttl: string) => {
    //     this.titleService.setTitle(ttl);
    //   });
  }

  // setPageHeader(title: string) {
  //   this.titleService.setTitle(title);
  // }

  isLogin() {
    return localStorage.getItem('current-user') != null;
  }

 


  logout() {
    this.authenticationService.logout();
  }

}
