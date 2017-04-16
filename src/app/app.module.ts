import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }        from './home.component';
import { InterestsComponent }   from './interests.component';
import { PortfolioComponent }   from './portfolio.component';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    InterestsComponent,
    PortfolioComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
