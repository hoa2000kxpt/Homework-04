import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData'
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  users: User[] = [];
  isAuthenticated = false;

  constructor(private router: Router, private serviceUser: UserService) { 
    this.serviceUser.getUser().subscribe(
      (res: any) => {
        this.users = res;
        // console.log(res);
      }
    )
  }

  ngOnInit() {
    
  }

  authenticate(signInData: SignInData): boolean {
    let currentIndex = this.checkCredentials(signInData)
    if (currentIndex != -1) {
      this.isAuthenticated = true;
      if (this.users[currentIndex].role == "admin") {
        this.router.navigate(['adminPage']);
      } else {
        this.router.navigate(['user']);
      }
      
      localStorage.setItem(`current-user`, JSON.stringify(this.users[currentIndex]));
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): number {
    if (this.checkEmail(signInData.getEmail()) == this.checkPassword(signInData.getPassword())) {
      return this.checkEmail(signInData.getEmail());
    } else {
      return -1;
    }
  }

  private checkEmail(email: string): number {
    for (let i = 0; i < this.users.length; i++) {
      if (email === this.users[i].email) {
        return i;
      }
    }
    return -1;

  }

  private checkPassword(password: string): number {
    for (let i = 0; i < this.users.length; i++) {
      if (password === this.users[i].password) {
        return i;
      }
    }
    return -1;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
    // localStorage.removeItem("current-user");
  }
}
