import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocationComponent } from './components/location/location.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes/app.routing';
import { FilterComponent } from './components/filter/filter.component';
import { DetailComponent } from './components/detail/detail.component';
import { LocalizationsComponent } from './components/localizations/localizations.component';
import { LocalizationDetailComponent } from './components/localization-detail/localization-detail.component';
import { LocalizationsGlobalComponent } from './components/localizations-global/localizations-global.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LocationComponent,
    CharacterComponent,
    FilterComponent,
    DetailComponent,
    LocalizationsComponent,
    LocalizationDetailComponent,
    LocalizationsGlobalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
