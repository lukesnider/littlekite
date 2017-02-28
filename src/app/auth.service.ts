import { Injectable } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState, AngularFire} from 'angularfire2';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;
  userGroup: string;
   redirectUrl: string;
  constructor(public af: AngularFire,public auth: AngularFireAuth, private router: Router) {
    this.af.auth.subscribe(auth => {
        if(auth){
         // console.log(auth);
          this.isLoggedIn = true;
          this.router.navigate(['/secure']);
        }else{
         // console.log("not logged in");
           this.router.navigate(['/login']);
        }
      }
    
    );
  }

}


