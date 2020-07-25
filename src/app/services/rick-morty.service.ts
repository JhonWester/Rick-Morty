import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from '../model/character';
import { Observable } from 'rxjs';
import { Filter } from '../model/filter';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_ENDPOINT;
   }

   getListCharacter() {
     return this.http.get<Filter>(this.url + 'character');
   }

   getSomeCharacter(numbers: string): Observable<Character[]> {
     return this.http.get<Character[]>(this.url + `character/${numbers}`);
   }

   getByName(name: string): Observable<Filter> {
      return this.http.get<Filter>(this.url + `character/?name=${name}`);
   }

   nextPage(num: number) {
    return this.http.get<Filter>(this.url + `character/?page=${num}`);
   }

   getCharacter(id: number): Observable<Character> {
     return this.http.get<Character>(this.url + `character/${id}`);
   }
}
