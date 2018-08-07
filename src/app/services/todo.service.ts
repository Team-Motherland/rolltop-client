import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private myHttp: Http) { }

  createNewProject(dataToSend){
    return this.myHttp.post(`${environment.apiBase}/api/projects`, { withCredentials: true }, dataToSend)
    .toPromise()
    .then( res => console.log(res.json()) )
    .catch( err => console.log('Error while creating new entry: ', err) )
  }

  getProjects(){
    return this.myHttp.get(`${environment.apiBase}/api/projects`)
    .map((responseThingy)=> responseThingy.json())
  }
}
