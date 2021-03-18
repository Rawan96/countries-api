import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchFilter: string | undefined;
  allCountries: Country[] | undefined;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAllCountries()
      .subscribe((countries) => (this.allCountries = countries));
  }

  //Search country by name
  get countries() {
    return this.allCountries
      ? this.allCountries.filter((country: Country) =>
          this.searchFilter
            ? country.name
                .toLowerCase()
                .includes(this.searchFilter.toLowerCase())
            : country
        )
      : this.allCountries;
  }
}
