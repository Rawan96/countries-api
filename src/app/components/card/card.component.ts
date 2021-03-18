import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  country: Country | undefined;
}
