import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    PokemonlistComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonlistComponent
  ]
})
export class PokemonModule { }
