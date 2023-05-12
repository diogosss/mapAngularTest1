import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZGlvZ29zc3MiLCJhIjoiY2xoanlwMXI3MDNhNTNucDh6NzhwYzU3MiJ9.71IQHqH8JePDskCYiVHVVg';

if( !navigator.geolocation){
  alert('Navegador no soporta GEolocation');
  throw new Error('Navegador no soporta GEolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
