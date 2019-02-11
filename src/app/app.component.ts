import { Component } from '@angular/core';
import { CitiesService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop-components';

  opened = true;

  constructor(public srv: CitiesService) {
  }

  showContent() {
    this.opened = !this.opened;
  }
}
