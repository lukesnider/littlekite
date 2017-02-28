import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {UsersService} from "./users-service.service";
declare var $:any;




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
          equalTo: this.get_userGroup()[0]
        }
      });

    });
  }

  add_complaint(form){
    const itemObservable = this.af.database.object('/test');
    itemObservable.set({ first_name: form.first_name});

  }


  logout() {
    this.af.auth.logout();
  }

  get_userGroup(){
    var groupsArray = [];
     this.af.auth.subscribe(auth => {
        this.user = this.af.database.list('/users/-'+auth.uid);
      
      this.user.subscribe(x => {
        groupsArray = [];
        for(var i in x){
          
          if(x[i].$key == "groups"){
            var array = $.map(x[i], function(value, index) {
                if(value){
                  groupsArray.push(index);
                }
            });
            //console.log(groupsArray);
            //for(var z in x[i]){
            //  console.log(x[i]);
              //groupsArray.push(z);
            //}
        
          }
          //alert(i); // alerts key
          //alert(foo[i]); //alerts key's value
        }
        //console.log('Subscriber 1: ', x)
        /*x.forEach(function(element){
          //console.log(element);
            if(element.$key == "groups"){
            console.log(element.keys);
          }
        });*/
      });
    
  
    });
    return groupsArray;
  }


}


