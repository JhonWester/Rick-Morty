import { Component, OnInit } from '@angular/core';
import { Localization } from '../../model/locations';
import { LocationsService } from '../../services/locations.service';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../model/character';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-localization-detail',
  templateUrl: './localization-detail.component.html',
  styleUrls: ['./localization-detail.component.css']
})
export class LocalizationDetailComponent implements OnInit {

  localization: Localization;
  listCharacter: Array<Character>;
  idLocation: number;
  loading: boolean;

  constructor(private apiLocalization: LocationsService, private apiCharacter: RickMortyService, private route: ActivatedRoute,
              private site: Location) { }

  ngOnInit() {
    this.loading = true;
    this.idLocation = this.route.snapshot.params.site;
    this.loadLocation();
  }

  loadLocation() {
    if (this.idLocation) {
      this.apiLocalization.getSingleLocation(this.idLocation).subscribe(response => {
        this.localization = response;
        this.loadCharacters();
      },
      error => console.error(error),
      );
    }
  }

  loadCharacters() {
    if (this.localization.residents.length > 0) {
      const url = this.localization.residents;
      let chain = '';
      url.forEach(value => {
        chain += value.split('').reverse().join('').split('/')[0] + ',';
      });
      this.apiCharacter.getSomeCharacter(chain).subscribe(response => {
        this.listCharacter = response;
      },
      error => console.error(error),
      () => this.loading = this.listCharacter.length > 0 ? false : true);
    } else {
      this.loading = false;
    }
  }

  back() {
    this.site.back();
  }

}
