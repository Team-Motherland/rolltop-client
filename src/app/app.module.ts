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

//(JM Added components)
import { ToDoMainComponent } from './components/toDoApplet/to-do-main/to-do-main.component';
import { NewProjectComponent } from './components/toDoApplet/new-project/new-project.component';

import { QuoteComponent } from './components/quote/quote.component';


// routes:
import {Routes, RouterModule} from '@angular/router';

//services:
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service';
import { QuoteService } from './services/quote.service';
import { PastebinService } from './services/pastebin.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'

//image upload
import { FileUploadModule } from "ng2-file-upload";
import { TodoService } from './services/todo.service';
import { ShowProjectsComponent } from './components/toDoApplet/show-projects/show-projects.component';
import { ShowProjectInfoComponent } from './components/toDoApplet/show-project-info/show-project-info.component';
import { EditProjectComponent } from './components/toDoApplet/edit-project/edit-project.component';
import { ShowTasksComponent } from './components/toDoApplet/show-tasks/show-tasks.component';
import { AddTaskComponent } from './components/toDoApplet/add-task/add-task.component';
import { EditTaskComponent } from './components/toDoApplet/edit-task/edit-task.component';
import { PastebinComponent } from './components/pastebin/pastebin.component';

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
    },
    // (JM) ToDo List Main App Route 
    {
      path:'todo',
      component: ToDoMainComponent
    },
    {
      path: 'todo/:id',
      component: ShowProjectInfoComponent
    },
    {
      path: 'pastebin',
      component: PastebinComponent
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
    // ToDo components after this
    ToDoMainComponent,
    NewProjectComponent,
    //End ToDo component 
    QuoteComponent,
    ShowProjectsComponent,
    ShowProjectInfoComponent,
    EditProjectComponent,
    ShowTasksComponent,
    AddTaskComponent,
    EditTaskComponent,
    PastebinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes), //connecting routes with the app  
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, NotesService, QuoteService, TodoService, PastebinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
