import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent{

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number=16.5;
  public map?: Map;
  public currentLngLat: LngLat= new LngLat( -78.55483990951429,-0.3318670302490042);

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento html no es encontrado';

    console.log(this.divMap);
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    // //crear markador personalizado
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Diogos';

    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat).addTo(this.map);

  }

}
