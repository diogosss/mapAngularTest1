import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesResponce, Feature } from '../interfaces/places';

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

  constructor( private http: HttpClient ) {
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
    //todo: evaluar cuando el query es vacio
    this.isLoadingPlaces = true;

    this.http.get<PlacesResponce>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=-78.28146498145459%2C0.07391290643246862&access_token=pk.eyJ1IjoiZGlvZ29zc3MiLCJhIjoiY2xoanlwMXI3MDNhNTNucDh6NzhwYzU3MiJ9.71IQHqH8JePDskCYiVHVVg`)
    .subscribe( resp => {
        console.log(resp.features);

        this.isLoadingPlaces = false;
        this.places = resp.features;
    } );
  }
}
