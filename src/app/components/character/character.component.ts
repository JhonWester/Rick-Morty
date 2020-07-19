import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../model/character';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor(apiService: RickMortyService) { }

  ngOnInit() {
  }

}
