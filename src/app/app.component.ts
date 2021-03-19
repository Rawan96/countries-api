import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  theme: Observable<Theme> | undefined;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
