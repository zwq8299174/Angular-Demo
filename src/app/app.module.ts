import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule }   from '@angular/router';



import { AppService } from './app.service';

import { AppComponent }  from './app.component';
import { HeroListComponent }  from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    	{
    		path: '',
			  redirectTo: '/heroes',
			  pathMatch: 'full'
    	},
      {
        path: 'heroes',
        component: HeroListComponent
      },
      {
			  path: 'detail/:id',
			  component: HeroDetailComponent
			}
    ])
  ],
  declarations: [
    AppComponent,HeroListComponent,HeroDetailComponent
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent]
})
export class AppModule { }