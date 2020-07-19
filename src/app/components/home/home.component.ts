import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListCharacter: Array<Character>;
  max: number;
  min: number;

  constructor(private apiService: RickMortyService) { }

  ngOnInit() {
    this.ListCharacter = [];
    this.max = 591;
    this.min = 1;
    this.getCharacters();
  }

  generateNumber(): string {
    let chain = '';
    for (let i = 0; i < 4; i++) {
      const val = Math.round(Math.random() * (this.max - this.min) + this.min);
      chain += val.toString() + ',';
    }
    return chain.slice(0, -1);
  }

  getCharacters() {
    this.apiService.getSomeCharacter(this.generateNumber()).subscribe(response => {
      this.ListCharacter = response;
      console.log(this.ListCharacter);
    },
     error => console.error(error)
    );
  }

}
