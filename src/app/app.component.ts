import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'task-ul',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  list:string[] = [];
  constructor() {

  }
  createTask({option}: { option: string }){
    this.tasks.push(option)
  }

  @Output() tasks = this.list;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
}
