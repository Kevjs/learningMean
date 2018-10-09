import { Component } from '@angular/core';
import { PokepiService } from './pokepi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(private _pokepiService : PokepiService){
    
  }
}
