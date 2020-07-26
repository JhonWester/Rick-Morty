import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locations } from '../model/list-location';
import { environment } from '../../environments/environment';
import { Localization } from '../model/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.API_ENDPOINT + 'location';
  }

  getAllLocations(page?: number): Observable<Locations> {
    if (!page) {
      return this.http.get<Locations>(this.url);
    } else {
      return this.http.get<Locations>(this.url + `?page=${page}`);
    }
  }

  getSingleLocation(localization: number): Observable<Localization> {
    return this.http.get<Localization>(this.url + `/${localization}`);
  }

}
