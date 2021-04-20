import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FetchAllPokemonResponse, Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient ) { }


  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<FetchAllPokemonResponse>(`${ this.url }/pokemon?limit=1500`)
              .pipe( 
                map( this.transformSmallPokemonIntoPokemon )
              )
  }

  private transformSmallPokemonIntoPokemon( resp: FetchAllPokemonResponse ): Pokemon[] {

    const pokemonList: Pokemon[] = resp.results.map( poke => {

      const urlArr = poke.url.split('/');
      const id  = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

      return {
        id,
        pic,
        name: poke.name,
      }
    })

    return pokemonList;
  }
  

}
