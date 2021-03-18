import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  showOptions = false;

  @Input()
  placeholder: string | undefined;

  @Input()
  options: string[] | undefined;

  @Input()
  region: string | undefined;

  @Output()
  regionChange: EventEmitter<string> = new EventEmitter();

  select(region: string) {
    this.regionChange.emit(region);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
