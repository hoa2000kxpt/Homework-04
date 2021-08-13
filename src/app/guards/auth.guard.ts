import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  defineRole: any;

  constructor(private authenticationService: AuthService, private router: Router) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.defineRole = localStorage.getItem('current-user');

    if (this.defineRole != null) {
      let role = JSON.parse(this.defineRole).role;
      if (role === "user" || role == null) {
        // this.router.navigate(['/adminPage']);
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }

}

