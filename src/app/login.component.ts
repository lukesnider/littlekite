import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from './auth.service';
import { Router }      from '@angular/router';



@Component({
  selector: 'app-root',
  template: `

  <div class="container">

  <div class="container" style="margin-top:100px;">
		<div class="row">
				<form (ngSubmit)="login(loginform.value)" #loginform="ngForm">
					<div class="form-group">
						<label for="email">Email address</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="Email" required ngModel>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" id="password" name="password" placeholder="Password" required ngModel>
					</div>
					<div class="form-group">
					<button type="submit" class="btn btn-default">Submit</button>
					</div>
				</form>

				</div>
			</div>
		</div>

  `,
})

export class LoginComponent {
 message: string;
  constructor(public af: AngularFire,public authService: AuthService, public router: Router) {

  }

  login(form){
    this.af.auth.login({
      email: form.email,
      password: form.password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });

		//this.router.navigate(['/secure']);
  }

  logout() {
    this.af.auth.logout();
  }
}



