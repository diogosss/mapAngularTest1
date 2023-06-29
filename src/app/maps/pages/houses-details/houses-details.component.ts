import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.css']
})
export class HousesDetailsComponent implements OnInit {


  @Input() house?: House;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentHouse: House = {
    title: '',
  description: '',
  lngLat: [0,0]
  };
  message = '';

  constructor() { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentHouse = { ...this.house };
  }

  updatePublished(status: boolean): void {
    // if (this.currentHouse.key) {
    //   this.tutorialService.update(this.currentHouse.key, { published: status })
    //   .then(() => {
    //     this.currentHouse.published = status;
    //     this.message = 'The status was updated successfully!';
    //   })
    //   .catch(err => console.log(err));
    // }
  }

  updateTutorial(): void {
    // const data = {
    //   title: this.currentHouse.title,
    //   description: this.currentHouse.description
    // };

    // if (this.currentHouse.key) {
    //   this.tutorialService.update(this.currentHouse.key, data)
    //     .then(() => this.message = 'The tutorial was updated successfully!')
    //     .catch(err => console.log(err));
    // }
  }

  deleteTutorial(): void {
    // if (this.currentHouse.key) {
    //   this.tutorialService.delete(this.currentHouse.key)
    //     .then(() => {
    //       this.refreshList.emit();
    //       this.message = 'The tutorial was updated successfully!';
    //     })
    //     .catch(err => console.log(err));
    // }
  }


}
