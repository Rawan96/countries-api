import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map((res) => res[0]));
  }

  getBorderCountriesByCode(codes: string[]) {
    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(';')}`
    );
  }
}
