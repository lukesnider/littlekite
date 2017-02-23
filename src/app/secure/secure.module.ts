import { NgModule } from '@angular/core';
import { AngularFireModule, AngularFireAuth, AuthProviders } from 'angularfire2';
import { RouterModule , Routes} from '@angular/router';
import { SecureComponent } from './secure.component';
import { SecureDashboardComponent } from './secure-dashboard.component';
import { SecureRoutingModule } from './secure-routing.module';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';


@NgModule({
    imports: [
        CommonModule,
        SecureRoutingModule
    ],
    declarations: [
        SecureComponent,
        SecureDashboardComponent
    ],
  providers: [AuthGuard,AuthService]

})

export class SecureModule {}