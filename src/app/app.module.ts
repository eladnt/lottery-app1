import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
const ROUTES = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
