import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

import { Hero } from './hero';

@Component({
	selector: 'hero-list',
	template: `
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of heroes | slice:0:5" 
		  	[ngClass]="{'selected':hero === selectedHero,'normal':hero!=selectedHero}"
		  	(click)="onSelect(hero,$event)">
		    <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
	`
})
export class HeroListComponent {
	constructor(
		private appService: AppService,
		private router: Router
	) {}
	getHeroes(): void {
		this.appService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero,e:any): void {
		this.selectedHero = hero;
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}