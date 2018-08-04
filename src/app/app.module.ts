import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '../../node_modules/@angular/http';

// components:
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

// routes:
import {Routes, RouterModule} from '@angular/router';

//services:
import { AuthService } from './services/auth.service';

//image upload
import { FileUploadModule } from "ng2-file-upload";

const routes: Routes = [
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes), //connecting routes with the app  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
