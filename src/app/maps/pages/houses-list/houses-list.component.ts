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
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      title: 'Apartamento, Argentina',
      description: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      title: 'Local comercial, España',
      description: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
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
