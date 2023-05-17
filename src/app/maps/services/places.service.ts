import { Injectable } from '@angular/core';
import { PlacesResponce, Feature } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationready(): boolean{
    return !!this.useLocation;
  }

  constructor(
    private placesApi: PlacesApiClient,
    private mapService: MapService
    ) {
    this.getUserLocation();
  }


  public async getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve( this.useLocation );
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery( query: string = ''){

    if(query.length === 0){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if(!this.useLocation) throw Error('No hay user location');

    //todo: evaluar cuando el query es vacio
    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponce>(`/${query}.json`,{
      params:{
        proximity: this.useLocation.join(',')
      }
    })
    .subscribe( resp => {
        console.log(resp.features);

        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces( this.places);
    } );
  }
}
