import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) { }

  goToMyLocation(){
    //console.log('ir a mi ubicacion');

    if(!this.placesService.isUserLocationready) throw Error('No hay ubicacion de usuario');
    if(!this.mapService.isMapReady) throw Error('No se ha inicializado el mapa');

    this.mapService.flyTo( this.placesService.useLocation!);


  }


}
