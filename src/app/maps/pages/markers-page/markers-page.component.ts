import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string,
  marker: Marker,
}

interface PlainMarker {
  color: string,
  lngLat: number[]
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent{

  @ViewChild('map') divMap?: ElementRef;

  //public markers: Marker[] = [];
  public markers: MarkerAndColor[] = [];

  public zoom: number=16.5;
  public map?: Map;
  public currentLngLat: LngLat= new LngLat( -78.53323670257686,-0.3523443818688474); //-0.3523443818688474, -78.53323670257686

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento html no es encontrado';

    console.log(this.divMap);
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.readFromCloudStorage();

    // //crear markador personalizado
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = '🏟';
    // //markerHtml.className = 'markerMonitor';
    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat).addTo(this.map);

  }



  paintMarker( lngLat: LngLat, color: string ){
    if( !this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
    .setLngLat( lngLat )
    .addTo( this.map);

    this.markers.push({
      color: color,
      marker: marker,
    });

    this.saveToCloudStorage();


    // ver como cambia las coor al mover el marker
    // marker.on('dragend', () => {
    //   console.log(marker.getLngLat());
    // });

    marker.on('dragend', () =>  this.saveToCloudStorage());

    //dragend

  }


  flyTo(marker: Marker){

    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });

  }

  /**
   * SAVE to Local Storage
   */
  // saveToLocalStorage(){
  //   //console.log(this.markers);
  //   const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => {
  //     return{
  //       color,
  //       lngLat: marker.getLngLat().toArray()
  //     }
  //   });

  /**
   * SAVE to Local Storage
   */
  saveToCloudStorage(){
    //console.log(this.markers);
    const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => {
      return{
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    //console.log(plainMarkers);

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  /**
   * Local Storage for tests
   */
  // readFromLocaStorage(){

  //   const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
  //   const plainMarkers = JSON.parse( plainMarkersString);
  //   console.log(plainMarkers);

  //   plainMarkers.forEach ( ({color, lngLat}:any) => {
  //     const [ lng, lat ] = lngLat;
  //     const coords = new LngLat( lng, lat);
  //     this.paintMarker(coords, color)
  //   })

  // }

  /**
   * Firebase Storage
   */
  readFromCloudStorage(){

    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers = JSON.parse( plainMarkersString);
    console.log(plainMarkers);

    plainMarkers.forEach ( ({color, lngLat}:any) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat);
      this.paintMarker(coords, color)
    })

  }


}
