import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'task-ul',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:string[] = [];
  constructor() {

  }
  ngOnInit(){

  }
  createTask({option}: { option: string }){
    this.tasks.push(option)
    console.log(this.list)
  }
  @Output() tasks = this.list;
}
