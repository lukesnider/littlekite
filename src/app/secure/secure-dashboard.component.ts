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


  `
})

export class SecureDashboardComponent {
/*	name: any;
	  constructor(public af: AngularFire, public authService: AuthService, public router: Router) {
			this.af.auth.subscribe(auth => {
      			if(auth) {
        		this.name = auth;
				this.authService.isLoggedIn = true;
      			}else{
					  this.authService.isLoggedIn = false;
				  }
    		});
	  }
*/

}



