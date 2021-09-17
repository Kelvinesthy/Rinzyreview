import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './user';
import { UserService } from './user/user.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authservice: AuthService,
    private router: Router,
    private user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isLoggedIn) {
        return true
      }
      return this.user.isLoggedIn().pipe(map(res => {
        if (res.status){
          this.authservice.setLoggedIn(true)
          return true
        } else {
          this.router.navigate(['user/login'])
          return false
        }
      }))
  }

}
