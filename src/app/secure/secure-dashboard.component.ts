import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';
import { FormsModule }   from '@angular/forms';




@Component({
  template: `

    <div class="container">
        <h1>Dashboard</h1>
    </div>

		<div class="">
			<button (click)="logout()" class="btn btn-default">Logout</button>
		</div>


  `
})

export class SecureDashboardComponent {
 message: string;
  constructor(public af: AngularFire,public authService: AuthService, public router: Router) {

  }

  logout() {
    this.af.auth.logout();
  }
}



