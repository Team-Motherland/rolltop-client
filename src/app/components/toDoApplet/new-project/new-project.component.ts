import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectList: Array<any>;

  newProject = {
    title: String,
    tasks: Array,
    description: String,
    closed: Boolean
  }

  saveError: string;

  constructor(private myTodoService: TodoService,
              private myRouter: Router ) { }

  ngOnInit() {
  }

  saveNewProject(){
    this.myTodoService.createNewProject(this.newProject)
    .then( (newProject) => {
      //this.myRouter.navigate(['/notes']);
      console.log("Project Saved");
    } )
    .catch( err => this.saveError = 'Error while saving note in the component: ');
  }

  getProjects(){
    this.myTodoService.getProjects()
    .subscribe((res)=>{
      this.projectList = res.reverse();
    })
  }

}
