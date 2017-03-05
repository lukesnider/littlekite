import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable, FirebaseRef } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods,AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {UsersService} from "./users-service.service";
import * as firebase from "firebase";

declare var $:any;




@Component({
  templateUrl: '../templates/secure-complaints.html'
})

export class SecureComplaintsComponent {
  complaints: FirebaseListObservable<any[]>;
  complaints_by_group = [];
  userGroups = [];
  user: FirebaseListObservable<any[]>;
  database = firebase.database();

 
  complaintsArray = [];
  constructor(public af: AngularFire,public router: Router,public userService:UsersService) 
  {

      //this.get_complaints();
      this.getComplaintData();
      
  }

  getComplaintData(){
     this.userGroups = this.get_userGroup();

     this.userGroups.forEach(function(group){
       var thisGroup = firebase.database().ref('complaints/' + group);
       thisGroup.once('value', function(snapshot){
          var data = snapshot.val();
          this.addTableByGroup(group,data);
          //for(let d in data){
          //  $('.container').append("<li>"+data[d].number+"</li>");
          //}
       });
     });
  }

  addTableByGroup(group,complaints){
    var html =
    "<div  class='row'> "+

        "<table class='table table-hover' [mfData]='data' #mf='mfDataTable' [mfRowsOnPage]='5'>"+
            "<thead>"+
           " <tr>"+
               " <th style='width: 20%'>"+
                    "<mfDefaultSorter  by='name'>Number</mfDefaultSorter>"+
               " </th>"+
                "<th style='width: 20%'>"+
                    "<mfDefaultSorter by='email'>Locations</mfDefaultSorter>"+
                "</th>"+
                "<th style='width: 20%'>"+
                    "<mfDefaultSorter by='age'>Date</mfDefaultSorter>"+
                "</th>"+
                "<th style='width: 40%'>"+
                    "<mfDefaultSorter by='city'>Type</mfDefaultSorter>"+
                "</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>"+
            "<tr >"+
                "<td><a href=''></a></td>"+
                "<td></td>"+
                "<td class='text-right'></td>"+
                "<td></td>"+
            "</tr>"+
            "</tbody>"+
            "<tfoot>"+
            "<tr>"+
                "<td colspan='4'>"+
                    "<mfBootstrapPaginator [rowsOnPageSet]='[5,10,25]'></mfBootstrapPaginator>"+
                "</td>"+
            "</tr>"+
            "</tfoot>"+
        "</table>"+

    "</div>";
  }
  get_complaints(){
    this.userGroups = this.get_userGroup();
    //console.log(this.userGroups);

      for(var group in this.userGroups){
          this.af.auth.subscribe(auth => {
            this.complaints_by_group[group] = this.af.database.list('/complaints/'+group);
          });
      };

      for(var i of this.complaints_by_group){
        console.log(i);
      };


    //});
    //console.log(this.complaints_by_group);
    /*this.af.auth.subscribe(auth => {
      this.complaints = this.af.database.list('/complaints', {
        query: {
          orderByChild: "group",
          equalTo: this.get_userGroup()[0]
        }
      });

    });*/

    //this.af.auth.subscribe(auth => {
     // this.complaints = this.af.database.list('/complaints/Complaint Manager');

    //});
    /*this.af.auth.subscribe(auth => {
      this.complaints = this.af.database.list('/complaints');
      console.log(this.complaints);
      this.user.subscribe(x => {
        for(var i in x){
          console.log(x[i]);
          if(x[i].$key == "groups"){
            var array = $.map(x[i], function(value, index) {
                if(value){
                  //console.log()
                }
            });
          }
        }
      });
    });*/



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


