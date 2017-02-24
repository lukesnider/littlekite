import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods,
  AngularFireAuth,FirebaseAuthState, AngularFire} from 'angularfire2';

import { AuthService }      from './auth.service';

@Injectable()


export class AuthGuard implements CanActivate {
  constructor(public af: AngularFire,private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  { 
    let url: string = state.url;

    //return this.checkLogin(url);
    return Observable.of(this.authService.isLoggedIn);
  }

  /*checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
       return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }*/
}
}
