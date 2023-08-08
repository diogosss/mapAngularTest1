import { Component, ElementRef, ViewChild  } from '@angular/core';
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
  selector: 'app-houses-add',
  templateUrl: './houses-add.component.html',
  styleUrls: ['./houses-add.component.css']
})
export class HousesAddComponent {

  @ViewChild('map') divMap?: ElementRef;

  isSatelliteStyle = false; // Track the current map style

  //public markers: Marker[] = [];
  public markers: MarkerAndColor[] = [];

  public zoom: number=16.5;
  public map?: Map;
  public currentLngLat: LngLat= new LngLat( -78.532757, -0.352193); //-0.3523443818688474, -78.53323670257686

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento html no es encontrado';


    console.log(this.divMap);
    this.map = new Map({
      container: this.divMap.nativeElement,
      //style: 'mapbox://styles/mapbox/streets-v12', //satellite-v9
      style: this.isSatelliteStyle ? 'mapbox://styles/mapbox/satellite-v9' : 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.readFromLocaStorage();

    // //crear markador personalizado
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Diogos';

    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat).addTo(this.map);

  }

  createMarker(){
    if( !this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
    const lgnLat = this.map?.getCenter();

    this.addMarker(lgnLat,color);
  }

  addMarker( lngLat: LngLat, color: string ){
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

    this.saveToLocalStorage();


    // ver como cambia las coor al mover el marker
    // marker.on('dragend', () => {
    //   console.log(marker.getLngLat());
    // });

    marker.on('dragend', () =>  this.saveToLocalStorage());

    //dragend

  }

  deleteMarker(index: number){
    this.markers[index].marker.remove();
    this.markers.splice( index, 1);
  }

  flyTo(marker: Marker){

    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });

  }

  saveToLocalStorage(){
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

  readFromLocaStorage(){

    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers = JSON.parse( plainMarkersString);
    console.log(plainMarkers);

    plainMarkers.forEach ( ({color, lngLat}:any) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat);
      this.addMarker(coords, color)
    })

  }


  toggleMapStyle(): void {
    this.isSatelliteStyle = !this.isSatelliteStyle;
    this.map?.setStyle(this.isSatelliteStyle ? 'mapbox://styles/mapbox/satellite-v9' : 'mapbox://styles/mapbox/streets-v12');
  }

}
