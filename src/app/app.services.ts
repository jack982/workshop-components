import { Injectable } from '@angular/core';
import { City } from './model/city';

@Injectable()
export class CitiesService {

  cities: City[] = [
    { name : 'Bologna', lat: 44.49, lng: 11.32, zoom: 8 },
    { name : 'Parigi', lat: 48.86, lng: 2.34 },
    { name : 'Copenaghen', lat: 55.67, lng: 12.56, zoom: 7 }
  ];

  active: City = this.cities[1];

  constructor() {
  }

  getCities() {
    return this.cities;
  }

  setActive(item: any) {
    const idx = this.cities.findIndex( i => i === item );
    this.active = this.cities[idx];
  }

}
