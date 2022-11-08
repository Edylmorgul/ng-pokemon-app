import { Component, OnInit } from '@angular/core'; // Importer élément besoin pour librairie ==> construire composant via angular
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({ // Constuire composant web
  selector: 'app-root', // Nom du composant (balise)
  templateUrl: 'app.component.html' // Définir code html associé à ce composant
})
export class AppComponent implements OnInit{ // Décrire des proprités pour un composant
  pokemons: Pokemon[] = POKEMONS; //Forcer typage en utilisant le type pokemon
  pokemonSelected: Pokemon|undefined; //Le pokémon peut être indéfini

  ngOnInit(): void{ // Typage typeScript ==> methode qui ne renvoi rien ==> on peut le supprimer
    console.table(this.pokemons); //this car methode ne connait pas pokemons ici
  }

  selectPokemon(pokemonId: Pokemon){
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId); // |undefined car le find peut renvoyer null donc mettre les deux deux types ==> pokemon et undefined
    if(pokemon){
      this.pokemonSelected = pokemon;
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    }

    else{
      this.pokemonSelected = pokemon;
      console.log("Ce pokémon n'est pas présent");
    }   
  }

  /*selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    //console.log('Vous avez cliqué sur le pokémon ' + pokemonName);
  }*/

  /*selectPokemon(event: MouseEvent){ // Ancienne version
    const index: number = +(event.target as HTMLInputElement).value
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemons[index].name}`);
  }*/
}
// Composant : classe + vue
// Interpolation = classe composant vers templates(app.component.html)
// ==> mécanisme utilisé en général mais il existe d'autres façon de faire
// Caster string to number ==> number() ou simplement + devant la chaine
// Attention cast null to number ==> 0

// Les directives :
// Qu'est-ce qu'une directive ? ==> Classe angular qui ressemble à un composant mais sans template
// Au lieu d'utiliser @component ==> @directive
// Permet d'intéragir avec les éléments HTML d'une page en leur attachant un comportement spécifique
// On peut avoir plusieurs directives, appliquées à un même élément

// Type de directives :
// 1. Les composants
// ==> app.component.ts est une directive
// 2. Les directives d'attributs ==> representé par des attributs au sein de balise HTML
// 3. Directives structurelles
// ==> Responsable de mettre en forme les éléments HTML d'une page, en manipulant des éléments et leurs fils
// ngFor ou ngIf sont des directives structurelles

// Qu'est-ce qu'un pipe ? 
// Fonctionnalité permettant d'effectuer des transformation plus facilement dans nos templates
// Par ex : ==> formater des dates pour affichage plus correct
// ==> Opérateur pipe = | à placer à droite de l'élément à transformer
// Ex : ==> pokemon.created | date
// date fait partie des pipes par défaut présent sur Angular, comme d'autres
// Plusieurs pipes peuvent se suivre pour un même élément
// Les pipes sont pratiques pour formater des données jugées trop brute à l'intérieur de nos templates
