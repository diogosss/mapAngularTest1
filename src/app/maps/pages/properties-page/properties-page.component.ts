import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}


@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {


public houses: House[] = [
  {
    title: 'Administrador del sistema',
    description: 'Administración',
    lngLat: [ -78.532757, -0.352193] ,
  },
  {
    title: 'Nodo 1',
    description: 'Casa de tía de Alex',
    lngLat: [ -78.533083, -0.352267] ,
  },
  {
    title: 'Nodo 2 ',
    description: 'Casa barrial',
    lngLat: [ -78.531490, -0.351427]
  },

]


}
