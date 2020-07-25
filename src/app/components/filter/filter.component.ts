import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '../../model/filter';
import { Info } from '../../model/info';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  name: string;
  filter: Filter;
  loading: boolean;
  currentPage: number;
  nextPage: number;

  constructor(private apiService: RickMortyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPage = 1;
    this.nextPage = this.currentPage;
    this.loading = true;
    this.name = this.route.snapshot.params.name ? this.route.snapshot.params.name : '';
    if (this.name !== '') {
      this.getFilters();
    } else {
      this.getListCharacter();
    }
  }

  getFilters(): void {
    this.apiService.getByName(this.name).subscribe(response => {
      this.filter = new Filter();
      this.filter = response;
    },
    error => console.error(error),
    () => this.setLoading());
  }

  getListCharacter() {
    this.apiService.getListCharacter().subscribe(response => {
      this.filter = new Filter();
      this.filter = response;
      this.changePage(this.filter.info);
    },
    error => console.log(error),
    () => this.setLoading());
  }

  loadPage(value: number) {
    this.apiService.nextPage(value).subscribe(response => {
      this.filter = response;
      this.changePage(this.filter.info);
    },
    error => console.error(error),
    () => this.setLoading());
  }

  changePage(info: Info) {
    if (info.next !== null) {
      const chain = info.next.split('=');
      this.currentPage = Number(chain[1]) - 1;
      this.nextPage = this.currentPage + 1;
    } else {
      this.nextPage = null;
    }
  }

  setLoading(): void {
    if (this.filter) {
      this.loading = false;
    }
  }
}
