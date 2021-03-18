import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }
}
