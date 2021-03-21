import { TestBed } from '@angular/core/testing';

import { ThemeSwitcherService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
