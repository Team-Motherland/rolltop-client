import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-main',
  templateUrl: './to-do-main.component.html',
  styleUrls: ['./to-do-main.component.css']
})
export class ToDoMainComponent implements OnInit {

  currentView: String = "showProjects";
  show: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  receiveMessage($event){
    console.log("Switch View Called");
    this.currentView = $event;
  }

  viewChecker(viewName){
    return viewName === this.currentView;
  }

  showForm() {
    this.show = !this.show;
  }
}
