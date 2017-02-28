import { NgModule } from '@angular/core';
import { AngularFireModule, AngularFireAuth, AuthProviders } from 'angularfire2';
import { RouterModule , Routes} from '@angular/router';
import { SecureComponent } from './secure.component';
import { SecureDashboardComponent } from './secure-dashboard.component';
import { SecureComplaintsComponent } from './secure-complaints.component';
import { SecureRoutingModule } from './secure-routing.module';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { UsersService } from './users-service.service';
import  {DataTableModule} from "angular2-datatable";


@NgModule({
    imports: [
        CommonModule,
        SecureRoutingModule,
        DataTableModule
    ],
    declarations: [
        SecureComponent,
        SecureDashboardComponent,
        SecureComplaintsComponent
    ],
  providers: [AuthGuard,AuthService,UsersService]

})

export class SecureModule {}