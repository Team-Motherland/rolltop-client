import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '../../node_modules/@angular/http';

// components:
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { QuoteComponent } from './components/quote/quote.component';

// routes:
import {Routes, RouterModule} from '@angular/router';

//services:
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service';
import { QuoteService } from './services/quote.service';

//image upload
import { FileUploadModule } from "ng2-file-upload";

const routes: Routes = [
    {
      path:'',
      component:TitleComponent
    },  
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'desktop',
      component:DesktopComponent
    },
    {
      path:'notes',
      component: AllNotesComponent
    },
    {
      path:'notes/new',
      component: NewNoteComponent
    },
    {
      path:'notes/:id',
      component: NoteDetailsComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AllNotesComponent,
    NewNoteComponent,
    NoteDetailsComponent,
    TitleComponent,
    DesktopComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes), //connecting routes with the app  
  ],
  providers: [AuthService, NotesService, QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
