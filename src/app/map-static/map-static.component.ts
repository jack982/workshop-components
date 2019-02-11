import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-static',
  template: `
  <img *ngIf="lat && lng"
    src="https://maps.googleapis.com/maps/api/staticmap?center={{lat}},{{lng}}&zoom={{zoom || 4 }}&size=200x200&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus"
  />`,
  styles: []
})
export class MapStaticComponent implements OnInit {
  @Input() lng: string;
  @Input() lat: string;
  @Input() zoom: number;

  constructor() { }

  ngOnInit() {
  }

}
