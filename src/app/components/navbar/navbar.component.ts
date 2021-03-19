import { Component } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private themeServices: ThemeService) {}

  toggleTheme() {
    this.themeServices.toggleMode();
  }
}
