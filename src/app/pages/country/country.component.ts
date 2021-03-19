import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import {
  Country,
  Currency,
  Language,
} from '../../interfaces/country-interface';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  country$: Observable<Country> | undefined;
  borderCountries$: Observable<Country[]> | undefined;

  constructor(
    private countries: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.countries.getCountryByName(params.country).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          this.borderCountries$ = this.countries.getBorderCountriesByCode(
            res.borders
          );
          return of(res);
        })
      );
    });
  }

  getLanguages(languages: Language[]) {
    return languages.map((language) => language.name);
  }

  getCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name);
  }
}
