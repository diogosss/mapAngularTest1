import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService) { }

  onQueryChanged(query: string = ''){
    //console.log(query);

    if(this.debounceTimer) clearTimeout (this.debounceTimer);

    this.debounceTimer = setTimeout(()=>{
      //console.log('Mandar este query: ',query);
      //backend para manadr a buscar lo que esta en el inputbox
      this.placesService.getPlacesByQuery( query);
    },1000);
  }



}
