import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import  { RouterModule } from '@angular/router'

@Component({
	selector: 'app-root',
	template: `
		<title>{{title}}</title>		
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'Complaint Manager';
}
