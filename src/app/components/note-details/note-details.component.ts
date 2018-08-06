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
  
  currentUser: any = {};


  constructor( private myNotesService: NotesService,
               private myAuthService: AuthService,
               private myRouter: Router,
               private myRoute: ActivatedRoute) { }

  ngOnInit() {    
    this.myAuthService.checklogin()
    .toPromise()
    .then( res => {
      this.currentUser = res;
    })
    .catch(err => {
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

  deleteThisNote(){
  //   if (!confirm("Are you sure?")) {
  //     return;
  //   }
  //   this.myNotesService
  //     .deleteNote(this.note._id)
  //     .then(() => {
  //       console.log("Success");
  //       this.myRouter.navigate(["/notes"]);
  //     })
  //     .catch(err => {
  //       alert("Sorry! Something went wrong.");
  //       console.log("Error while deleteing the note: ", err);
  //     });
  }


}
