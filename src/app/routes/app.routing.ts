import { HomeComponent } from '../components/home/home.component';
import { CharacterComponent } from '../components/character/character.component';
import { Routes } from '@angular/router';
import { FilterComponent } from '../components/filter/filter.component';
import { DetailComponent } from '../components/detail/detail.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'filter/:name', component: FilterComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'character', component: CharacterComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
