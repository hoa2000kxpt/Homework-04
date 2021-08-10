import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  defineRole: any;
  constructor(private authenticationService: AuthService, private router: Router) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.defineRole = localStorage.getItem('current-user');
    // console.log(defineRole);

    if (this.authenticationService.isAuthenticated
      && this.defineRole != null) {
      let role = JSON.parse(this.defineRole).role;
      if (role === "admin") {
        // this.router.navigate(['/adminPage']);
        return true;
      } 
    }
    this.router.navigate(['/admin']);
    return false;
  }

}
