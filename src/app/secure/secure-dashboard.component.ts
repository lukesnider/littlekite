import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';
import { FormsModule }   from '@angular/forms';





@Component({
  templateUrl: '../templates/secure-dashboard.html'
})

export class SecureDashboardComponent {
  user: FirebaseListObservable<any[]>;
  userArray = [];
  constructor(public af: AngularFire,public authService: AuthService, public router: Router) 
  {
      this.get_user();
    
  }



  get_user(){
    this.af.auth.subscribe(auth => {
      this.user = this.af.database.list('/users/-'+auth.uid);

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
    });
  }




  logout() {
    this.af.auth.logout();
  }
}



