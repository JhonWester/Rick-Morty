import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../model/character';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  loading: boolean;
  character: Character;
  id: number;
  constructor(private routes: ActivatedRoute, private apiServices: RickMortyService, private site: Location) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.routes.snapshot.params.id;
    this.loadCharacter();
  }

  loadCharacter(): void {
    this.loading = true;
    this.apiServices.getCharacter(this.id).subscribe(response => {
      this.character = response;
      if (this.character) {
        this.loading = false;
      }
    },
    error => console.log(error));
  }

  next(): void {
    this.id++;
    this.loadCharacter();
  }

  back(): void {
    this.id--;
    this.loadCharacter();
  }

  backCharacter(): void {
    this.site.back();
  }

}
