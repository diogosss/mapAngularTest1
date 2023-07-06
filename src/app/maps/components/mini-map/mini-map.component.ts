import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent  {

  @Input() lngLat?: [number, number]
  @ViewChild('map') divMap?: ElementRef;

  ngOnChanges(){ // Hay un bug al momento de buscar una casa no aparece el mapa

    console.log('AfterInitMinMap');console.log(this.lngLat);

    if( !this.divMap?.nativeElement) throw "Map Div not found";
    if( !this.lngLat) throw "LngLat cant be null";

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive:true,
    });

    new Marker()
      .setLngLat( this.lngLat)
      .addTo(map)


  }
}


/*

ngOnInit() is called right after the directive's data-bound properties have been checked for the first time,
and before any of its children have been checked. It is invoked only once when the directive is instantiated.

ngAfterViewInit() is called after a component's view, and its children's views, are created.
Its a lifecycle hook that is called after a component's view has been fully initialized.

*/
