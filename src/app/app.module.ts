import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Donne acces a ngModel

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  // Ce que j'ai déclaré dans les autres sous-modules
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // Ce qu'il faut importer depuis les internets
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
