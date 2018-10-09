import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokepiService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data=>{
      var ab = [];
      for(let i = 0; i<data['abilities'].length; i++){
        let test = this._http.get(`${data.abilities[i].ability.url}`);
        test.subscribe(data2=>{
          console.log(`There are ${data2.pokemon.length} with ${data2.name} as an ability`);
          let otherPoke = data2.pokemon;
          for(let t = 0; t < otherPoke.length; t++){
            if(otherPoke[t].pokemon.name != data.species.name){
              let iGetIt = this._http.get(otherPoke[t].pokemon.url);
              iGetIt.subscribe(data3=>{
                var thisAb = []
                for(let ii = 0; ii<data3.abilities.length; ii++){
                  thisAb.push(data3.abilities[ii].ability.name);
                }
                console.log(`${data3.species.name} also knows ${thisAb} abilities.`);
              });
            }
          }
        });
        ab.push(data.abilities[i].ability.name);
      }
      console.log(`${data.species.name}'s abilities are ${ab}.`);
    });
  }
}
