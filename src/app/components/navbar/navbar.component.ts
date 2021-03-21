import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.themeSwitcher.loadTheme();
  }

  changeTheme(): void {
    this.themeSwitcher.isDarkTheme = !this.themeSwitcher.isDarkTheme;
    this.themeSwitcher.changeTheme();
  }
}
