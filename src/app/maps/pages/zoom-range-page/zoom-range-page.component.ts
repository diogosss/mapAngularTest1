import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento html no es encontrado';

    console.log(this.divMap);
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5,40],
      zoom: 9,
    });
  }


}
