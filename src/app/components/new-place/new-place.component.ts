import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {
  
  placeData = {
    name: '',
    category: '',
    notes: ''
  }

  saveError: string;

  constructor(private myPlacesService: PlacesService,
              private myRouter: Router ) { }

  ngOnInit() {
  }

  saveNewPlace(){
    this.myPlacesService.createNewPlace(this.placeData)
    .then( (newPlace) => {
      // console.log('what in the place: ', newPlace)
      this.placeData = {
        name: '',
        category: '',
        notes: ''
      }
      this.saveError = '';
      this.myRouter.navigate(['/places']);

    } )
    .catch( err => this.saveError = 'Error while saving note in the component: ');
  }


}
