import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AngularFireAuth, AuthProviders } from 'angularfire2';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SecureModule } from './secure/secure.module';
//import { AuthGuard } from './auth-guard.service';
//import { AuthService } from './auth.service';



export const firebaseConfig = {
    apiKey: "AIzaSyB6SDQu21aVFVhTWmP7XvKgRDqGSh_NR04",
    authDomain: "littlekite-3c47e.firebaseapp.com",
    databaseURL: "https://littlekite-3c47e.firebaseio.com",
    storageBucket: "littlekite-3c47e.appspot.com",
    messagingSenderId: "754158819632"
};

export const FirebaseAuthConfig = {
  provider: AuthProviders.Password
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    SecureModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,FirebaseAuthConfig)
  ],
  //providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
