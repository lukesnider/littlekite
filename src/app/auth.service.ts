import { Injectable } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState} from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(public af: AngularFireAuth,public auth: AngularFireAuth) {
    this.af.auth.subscribe(auth => console.log(auth));
    if(auth) this.isLoggedIn = true;
  }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email,password): Observable<boolean> {
    this.af.auth.login({
      email: email,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
    return Observable.of(true).do(val => this.isLoggedIn);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
