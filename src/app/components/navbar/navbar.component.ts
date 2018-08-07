import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  theUser: any = {};
  constructor( private myAuthService: AuthService,
               private myRouter: Router) { }

  ngOnInit() { 
    this.myAuthService.checklogin()
    .toPromise()
    .then( resFromDB => {
      console.log('logged in user in nav comp: ', resFromDB)
      this.theUser = resFromDB;
    } )
  }

}
