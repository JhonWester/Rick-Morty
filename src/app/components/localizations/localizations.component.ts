import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Localization } from '../../model/locations';
import { Info } from 'src/app/model/info';
import { ChangePageService } from '../../services/change-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localizations',
  templateUrl: './localizations.component.html',
  styleUrls: ['./localizations.component.css']
})
export class LocalizationsComponent implements OnInit {

  localizations: Array<Localization>;
  loading: boolean;
  currenPage: number;
  limitPages: number;
  currentPage: number;
  nextPage: number;

  constructor(private apiService: LocationsService, private pageService: ChangePageService, private route: Router) { }

  ngOnInit() {
    this.limitPages = 0;
    this.currentPage = 1;
    this.nextPage = this.currentPage;
    this.localizations = [];
    this.loading = true;
    this.loadLocalizations();
  }

  loadLocalizations(): void {
    this.loading = true;
    this.apiService.getAllLocations().subscribe(response => {
      this.localizations = response.results;
      this.limitPages = response.info.pages;
      this.changePage(response.info);
    },
    error => console.error(error),
    () => {
      if (this.localizations.length > 0) {
        this.loading = false;
      }
    });
  }

  changePage(info: Info) {
    const value = this.pageService.changePage(info);
    this.nextPage = value !== null ? value : this.nextPage + 1;
    this.currentPage = this.nextPage - 1;
  }

  loadPage(value: number) {
    this.apiService.getAllLocations(value).subscribe(response => {
      this.localizations = response.results;
      this.changePage(response.info);
    },
    error => console.error(error),
    () => this.setLoading());
  }

  setLoading(): void {
    if (this.localizations) {
      this.loading = false;
    }
  }

  nextDetail(url: string) {
    const code = url.split('').reverse().join('').split('/');
    this.route.navigate(['/localizations', code[0]]);
  }
}
