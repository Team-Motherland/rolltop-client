import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-favplaces',
  templateUrl: './favplaces.component.html',
  styleUrls: ['./favplaces.component.css']
})
export class FavplacesComponent implements OnInit {

  allThePlaces: Array<Object> = [];
  listError: String = '';
  logoutError: String = '';
  theUser: any = {};


  constructor( private myPlacesService: PlacesService,
               private myAuthService: AuthService,
               private myRouter: Router) { }

  ngOnInit() {
    this.myAuthService.checklogin()
    .toPromise()
    .then( resFromDB => {
      console.log('user in places: ', resFromDB)
      this.theUser = resFromDB;
    } )
    this.showPlaceList();
  }


  showPlaceList(){
    // let dineCat: any =[];
    // let serviceCat: any =[];
    // let retailCat: any =[];
    // let privateCat: any =[];
    this.myPlacesService.getAllPlaces()
    .subscribe( allPlaces => {
      this.allThePlaces = allPlaces;
      //  let dineCat = allPlaces.filter(item =>{
      //   return item.category.indexOf("dining") > -1
      // })

    },
    () => this.listError = 'Sorry! No fav places! Something went bad on the backend route!')
  }


  logMeOut() {
    this.myAuthService
      .logout()
      .then(() => {
        this.myRouter.navigate(["/"]);
      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } // close logMeOut()



}
