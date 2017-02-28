import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {UsersService} from "./users-service.service";





@Component({
  templateUrl: '../templates/secure-complaints.html'
})

export class SecureComplaintsComponent {
  complaints: FirebaseListObservable<any[]>;
  user: FirebaseListObservable<any[]>;

  complaintsArray = [];
  constructor(public af: AngularFire,public router: Router,public userService:UsersService) 
  {
      this.get_complaints();
    
  }



  get_complaints(){
    this.af.auth.subscribe(auth => {
      this.complaints = this.af.database.list('/complaints', {
        query: {
          orderByChild: "group",
          equalTo: this.get_userGroup()
        }
      });

    });
  }




  logout() {
    this.af.auth.logout();
  }

  get_userGroup(){
    var groupsArray = [];
     this.af.auth.subscribe(auth => {
        this.user = this.af.database.list('/users/-'+auth.uid);
      
      this.user.subscribe(x => {
        
        //console.log('Subscriber 1: ', x)
        x.forEach(function(element){
          //console.log(element);
            if(element.$key == "groups"){
            console.log(element);
          }
        });
      });
    
  
    });
    return "Test ";
  }


}


