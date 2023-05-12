import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService) { }

  ngAfterViewInit(): void {

    if( !this.placesService.useLocation ) throw Error('No hay placesServices.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      //popup
      const popup = new Popup().setHTML(`
      <h6>Aqui Estoy</h6>
      <span>Estoy en este lugar del mundo</span>
      `);

      //marcador
      new Marker({color:'red'})
      .setLngLat(this.placesService.useLocation)
      .addTo(map);


  }

}
