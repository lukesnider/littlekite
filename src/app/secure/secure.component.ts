import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';



@Component({
  templateUrl:'../templates/secure-dashboard-navbar.html'
})

export class SecureComponent {
  constructor(public af: AngularFire,public authService: AuthService) {

  }

  logout() {
    this.af.auth.logout();
  }
}



