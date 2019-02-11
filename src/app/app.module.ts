import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapStaticComponent } from './map-static/map-static.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { CollapsableComponent } from './collapsable/collapsable.component';

import { CitiesService } from './app.services';

@NgModule({
  declarations: [
    AppComponent,
    MapStaticComponent,
    TabBarComponent,
    CollapsableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CitiesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
