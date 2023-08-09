import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';


@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {

  currentHouse?: House;
  currentIndex = 0;
  title = '';

  constructor() { }

  ngOnInit(): void {
  }



  public houses: House[] = [
    {
      title: 'Administrador del sistema',
      description: 'Administración del sistema de alarma comunitaria',
      lngLat: [ -78.532757, -0.352193] ,
    },
    {
      title: 'Nodo 1',
      description: 'Casa barrial Pampa 1',
      lngLat: [ -78.533083, -0.352267] ,
    },
    {
      title: 'Nodo 2 ',
      description: 'Casa Sra. Olga Delgado',
      lngLat: [ -78.531490, -0.351427]
    },

  ]

  refreshList(): void {
    this.currentHouse = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    // this.tutorialService.getAll().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // ).subscribe(data => {
    //   this.tutorials = data;
    // });
  }

  setActiveTutorial(house: House, index: number): void {
    // this.currentTutorial = tutorial;
    // this.currentIndex = index;
  }

  removeAllTutorials(): void {
    // this.tutorialService.deleteAll()
    //   .then(() => this.refreshList())
    //   .catch(err => console.log(err));
  }


  setActiveTHouse(house: House, index: number): void {
    this.currentHouse = house;
    this.currentIndex = index;
  }

}
