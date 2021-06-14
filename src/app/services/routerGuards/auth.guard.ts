import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  userValid: boolean = localStorage.getItem('validated') == 'true';
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(route.routeConfig.path)
    // console.log('AuthGuard#canActivate called');
    // console.log(this.userValid);
    if (this.userValid === true) {
      return true;
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
