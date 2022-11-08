import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Element essentiel pour le fonctionnement de l'application

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  declarations: [ // Liste composants de ce module
    AppComponent, BorderCardDirective, PokemonTypeColorPipe
  ],
  imports: [ // Importer élément d'autres modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Système injection de dépendances
  bootstrap: [AppComponent] // Qu'elle est le premier élément à démarrer lors du chargement de l'application
})
export class AppModule { }
