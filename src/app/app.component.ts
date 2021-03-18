import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'countries';
  constructor(private countries: CountriesService) {}

  ngOnInit() {
    //this.countries.getAllCountries().subscribe((res) => console.log(res));
  }
}
