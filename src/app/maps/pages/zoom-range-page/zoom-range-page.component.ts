import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

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

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if( this.map!.getZoom()<18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      //console.log(this.lngLat);
      const { lng, lat } = this.currentLngLat;
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomIOut(){
    this.map?.zoomOut();
  }

  zoomChanged( value: string ){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }


}
