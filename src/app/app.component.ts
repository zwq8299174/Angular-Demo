import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	title = 'Tour of Heroes';
	constructor() {}
	ngOnInit(): void {}
}