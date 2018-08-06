import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note: any = {
    title: '', content: ''
  }
  
  
  // title:any = {};
  // content:any = {};
  currentUser: any = {};


  constructor( private myNotesService: NotesService,
               private myAuthService: AuthService,
               private myRouter: Router,
               private myRoute: ActivatedRoute) { }

  ngOnInit() {    
    this.myAuthService.checklogin()
    .toPromise()
    .then( res => {
      // console.log('who: ', res);
      this.currentUser = res;
    })
    .catch(err => {
      // console.log('err is: ', err);
      this.myRouter.navigate(['/notes']);
    })
    this.myRoute.params.subscribe(params => {
      this.showOneNoteDetails(params["id"]);
    });
  }

  showOneNoteDetails(id){
    this.myNotesService.getOneNoteDetails(id)
    .then( oneNote => {
      this.note = oneNote;
    })
    .catch( err => console.log('Error while getting details in the component: ', err));
  }

}
