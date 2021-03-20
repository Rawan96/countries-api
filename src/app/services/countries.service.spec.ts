import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CountriesService } from './countries.service';
import { Country } from '../interfaces/country-interface';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService],
    });

    (service = TestBed.get(CountriesService)),
      (httpTestingController = TestBed.get(HttpTestingController));
    service = TestBed.inject(CountriesService);
  });

  it('should return all the countries from the API with get request', () => {
    const dummyCountries: Country[] = [
      {
        name: 'Afghanistan',
        topLevelDomain: ['.af'],
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        callingCodes: ['93'],
        capital: 'Kabul',
        altSpellings: ['AF', 'Afġānistān'],
        region: 'Asia',
        subregion: 'Southern Asia',
        population: 27657145,
        latlng: [33, 65],
        demonym: 'Afghan',
        area: 652230,
        gini: 27.8,
        timezones: ['UTC+04:30'],
        borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
        nativeName: 'افغانستان',
        numericCode: '004',
        currencies: [
          {
            code: 'AFN',
            name: 'Afghan afghani',
            symbol: '؋',
          },
        ],
        languages: [
          {
            iso639_1: 'ps',
            iso639_2: 'pus',
            name: 'Pashto',
            nativeName: 'پښتو',
          },
          {
            iso639_1: 'uz',
            iso639_2: 'uzb',
            name: 'Uzbek',
            nativeName: 'Oʻzbek',
          },
          {
            iso639_1: 'tk',
            iso639_2: 'tuk',
            name: 'Turkmen',
            nativeName: 'Türkmen',
          },
        ],
        translations: {
          de: 'Afghanistan',
          es: 'Afganistán',
          fr: 'Afghanistan',
          ja: 'アフガニスタン',
          it: 'Afghanistan',
          br: 'Afeganistão',
          pt: 'Afeganistão',
        },
        flag: 'https://restcountries.eu/data/afg.svg',
        regionalBlocs: [
          {
            acronym: 'SAARC',
            name: 'South Asian Association for Regional Cooperation',
            otherAcronyms: [],
            otherNames: [],
          },
        ],
        cioc: 'AFG',
      },

      {
        name: 'Åland Islands',
        topLevelDomain: ['.ax'],
        alpha2Code: 'AX',
        alpha3Code: 'ALA',
        callingCodes: ['358'],
        capital: 'Mariehamn',
        altSpellings: ['AX', 'Aaland', 'Aland', 'Ahvenanmaa'],
        region: 'Europe',
        subregion: 'Northern Europe',
        population: 28875,
        latlng: [60.116667, 19.9],
        demonym: 'Ålandish',
        area: 1580,
        gini: 27.8,
        timezones: ['UTC+02:00'],
        borders: [],
        nativeName: 'Åland',
        numericCode: '248',
        currencies: [
          {
            code: 'EUR',
            name: 'Euro',
            symbol: '€',
          },
        ],
        languages: [
          {
            iso639_1: 'sv',
            iso639_2: 'swe',
            name: 'Swedish',
            nativeName: 'svenska',
          },
        ],
        translations: {
          de: 'Åland',
          es: 'Alandia',
          fr: 'Åland',
          ja: 'オーランド諸島',
          it: 'Isole Aland',
          br: 'Ilhas de Aland',
          pt: 'Ilhas de Aland',
        },
        flag: 'https://restcountries.eu/data/ala.svg',
        regionalBlocs: [
          {
            acronym: 'EU',
            name: 'European Union',
            otherAcronyms: [],
            otherNames: [],
          },
        ],
        cioc: '',
      },
    ];

    service.getAllCountries().subscribe((countries) => {
      expect(countries.length).toBe(2);
      expect(countries).toEqual(dummyCountries);
    });

    const req = httpTestingController.expectOne(
      'https://restcountries.eu/rest/v2/all'
    );
    expect(req.request.method).toEqual('GET');
  });

  it('should get a country by name', () => {
    service.getCountryByName('Argentina').subscribe((country) => {
      expect(country).toBeTruthy();
      expect(country.name).toBe('Argentina');
      expect(country.population).toBe(43590400);
      expect(country.region).toBe('Americas');
      expect(country.capital).toBe('Buenos Aires');
    });

    const req = httpTestingController.expectOne(
      'https://restcountries.eu/rest/v2/name/Argentina'
    );
    expect(req.request.method).toEqual('GET');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
