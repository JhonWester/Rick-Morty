import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from '../model/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.API_ENDPOINT;
   }

   getListCharacter() {
     return this.http.get<Array<Character>>(this.url + 'character');
   }

   getSomeCharacter(numbers: string): Observable<Character[]> {
     return this.http.get<Character[]>(this.url + `character/${numbers}`);
   }
}
