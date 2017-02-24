import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SecureComponent } from './secure.component';
import { SecureDashboardComponent } from './secure-dashboard.component';
import { SecureComplaintsComponent } from './secure-complaints.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService }          from '../auth.service';



const secureRoutes: Routes = [
  {
    path: 'secure',
    component: SecureComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: SecureDashboardComponent },
          { path: 'complaints', component: SecureComplaintsComponent },
          { path: '', component: SecureDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(secureRoutes)
    ],
    exports: [
        RouterModule
    ]


})

export class SecureRoutingModule {}