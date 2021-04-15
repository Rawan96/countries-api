import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../interfaces/country-interface';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchFilter: string | undefined;
  allCountries: Country[] | undefined;
  regionFilter: string | undefined;
  regions = REGIONS;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountries()
      .subscribe((countries) => (this.allCountries = countries));
  }

  //Search country by name
  get countries() {
    return this.allCountries
      ? this.allCountries
          .filter((country: Country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          ) //by region
          .filter((country: Country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.allCountries;
  }
}
