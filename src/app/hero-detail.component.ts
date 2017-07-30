import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { AppService } from './app.service';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  id:number;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.id = parseInt(this.route.params.value.id);
    this.getHeroe(this.id);
  }
	getHeroe(id:number): void {
		this.appService.getHeroes(id).then(hero => this.hero = hero);
	}
  goBack(): void {
    this.location.back();
  }
}