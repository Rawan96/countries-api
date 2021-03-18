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
  countries: Observable<Country[]> | undefined;
  constructor(private countriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.getAllCountries();
  }
}
