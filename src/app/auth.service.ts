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
   redirectUrl: string;
  constructor(public af: AngularFire,public auth: AngularFireAuth, private router: Router) {
    this.af.auth.subscribe(auth => {
        if(auth){
          console.log(auth);
          this.isLoggedIn = true;
        }else{
          console.log("not logged in");
           this.router.navigate(['/login']);
        }
      }
    
    );
  }
  // store the URL so we can redirect after logging in
 
  /*setboolean(auth){

  }
  isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true;
  }*/
}


