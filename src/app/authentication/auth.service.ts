import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData'
import Swal from 'sweetalert2';
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
    let currentIndex = this.checkCredentials(signInData);


    if (currentIndex != -1) {
      if (this.users[currentIndex].status != null && this.users[currentIndex].status == "deactivated") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This account is deactivated!',
          footer: '<a href="https://stackoverflow.com/">How to solve this issue?</a>'
        })
        return false;
      }

      this.isAuthenticated = true;
      if (this.users[currentIndex].role == "admin") {
        this.router.navigate(['adminPage']);
      } else {
        this.router.navigate(['productManagement']);
      }

      localStorage.setItem(`current-user`, JSON.stringify(this.users[currentIndex]));
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): number {
    let currentIndex = this.checkEmail(signInData.getEmail());
    if (currentIndex != -1) {
      if (this.users[currentIndex].password == signInData.getPassword()) {
        return currentIndex;
      }

    }
    return -1;
  }

  private checkEmail(email: string): number {
    for (let i = 0; i < this.users.length; i++) {
      if (email === this.users[i].email) {
        return i;
      }
    }
    return -1;

  }

  // private checkPassword(password: string): number {
  //   for (let i = 0; i < this.users.length; i++) {
  //     if (password === this.users[i].password) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
    localStorage.removeItem("current-user");
  }
}
