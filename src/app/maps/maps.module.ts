import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import * as mapboxgl from 'mapbox-gl';
import { HousesDetailsComponent } from './pages/houses-details/houses-details.component';
import { HousesListComponent } from './pages/houses-list/houses-list.component';
import { HousesAddComponent } from './pages/houses-add/houses-add.component';
import { InfoComponent } from './pages/info/info.component';
import { NodeListComponent } from './pages/node-list/node-list.component';
import { NodeDetailsComponent } from './pages/node-details/node-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SideMenuComponent,
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
    HousesDetailsComponent,
    HousesListComponent,
    HousesAddComponent,
    InfoComponent,
    NodeListComponent,
    NodeDetailsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,FormsModule
  ]
})
export class MapsModule { }
