import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent}, // donner un nom à la route et l'associer à un composant
  {path: 'pokemon/:id', component: DetailPokemonComponent}, // Variable dans URL ==> /:var
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'} // Route par défaut ==> chaine de caractère vide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
