import { Injectable } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState, AngularFire,
        FirebaseRef} from 'angularfire2';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UsersService {
  /*constructor(public af: AngularFire,public auth: AngularFireAuth, private router: Router) {

  }

  get_userGroup(){
    return "Test Group1";

    this.af.auth.subscribe(auth => {

    });


          this.user = af.database.list('/users/-'+auth.uid);

      this.user.subscribe(x => {
        
        //console.log('Subscriber 1: ', x)
        x.forEach(element => {
          if(element.$key == 'groups'){
            this.userArray[element.$key] = 'groups';

          }else{
            this.userArray[element.$key] = element.$value;
          }
        });
      });
  }*/
}