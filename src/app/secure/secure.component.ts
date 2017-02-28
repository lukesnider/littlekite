import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { SecureComplaintsComponent } from './secure-complaints.component';



@Component({
  templateUrl:'../templates/secure-dashboard-navbar.html'
})

export class SecureComponent {
  complaintref: SecureComplaintsComponent;
  constructor(public af: AngularFire,public authService: AuthService) {

  }

  add_complaint(form){
    //this.complaintref.add_complaint(form);
    const itemObservable = this.af.database.object('/complaints/20170004');
    itemObservable.set({ first_name: form.first_name});
  }
  logout() {
    this.af.auth.logout();
  }
}



