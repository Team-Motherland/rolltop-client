import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { TodoService } from '../../../services/todo.service';


@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  id:Number;
  listError: String = '';
  //project = {};

  projectTasks: Array<any>;
  project;

  constructor(private myTodoService: TodoService,
    private myRouter: Router,
    private myRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.myRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    //this.getTaskArray();
    this.showTasks();
  }

  getTaskArray(){
    this.project = this.myTodoService.getTasks();
    //console.log(this.project.tasks);
  }

  showTasks(){
    this.myTodoService.getTaskList(this.id)
    .subscribe( tasks => {
      //console.log(tasks);
      this.projectTasks = tasks;
    },
    () => this.listError = 'Sorry! No notes! Something went bad on the backend route!')
  }

}
