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
    this.url = environment.API_ENDPOINT + 'character/';
   }

   getListCharacter() {
     return this.http.get<Filter>(this.url);
   }

   getSomeCharacter(numbers: string): Observable<Character[]> {
     return this.http.get<Character[]>(this.url + numbers);
   }

   getByName(name: string): Observable<Filter> {
      return this.http.get<Filter>(this.url + `?name=${name}`);
   }

   nextPage(num: number) {
    return this.http.get<Filter>(this.url + `?page=${num}`);
   }

   getCharacter(id: number): Observable<Character> {
     return this.http.get<Character>(this.url + id);
   }
}
