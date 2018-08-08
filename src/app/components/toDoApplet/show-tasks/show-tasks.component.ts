import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { TodoService } from '../../../services/todo.service';


@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  ProjectId:Number;
  listError: String = '';
  show: boolean = false;
  showEditTask: boolean = false;
  //project = {};

  projectTasks: Array<any>;
  project;

  constructor(private myTodoService: TodoService,
    private myRouter: Router,
    private myRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.myRoute.params.subscribe(params => {
      this.ProjectId = params["id"];
    });
    //this.getTaskArray();
    this.showTasks();
  }

  getTaskArray(){
    this.project = this.myTodoService.getTasks();
    //console.log(this.project.tasks);
  }

  showTasks(){
    this.myTodoService.getTaskList(this.ProjectId)
    .subscribe( tasks => {
      //console.log(tasks);
      this.projectTasks = tasks;
    },
    () => this.listError = 'Sorry! No notes! Something went bad on the backend route!')
  }

  showForm() {
    this.show=!this.show;
  }

  showEditT() {
    this.showEditTask=!this.showEditTask;
  }

  deleteTask(task){
    //console.log(task._id, this.ProjectId);
    this.myTodoService.deleteTask(task._id, this.ProjectId)
    .then( deletedProject => {
      //this.myRouter.navigate(['/todo/']);
      location.reload();
    } )
    .catch( err => this.listError = 'Error while saving note in the component: ');
  }

}
