import {Component, OnInit, DoCheck, Output, EventEmitter} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, DoCheck{
  taskname: any;
  status:string;
  showModal:boolean = true;
  color:string = "while";
  isfavorite:boolean = false;
  star:string = "assets/star.png"
  ToProcess(){
    this.status = "process";
  }
  ngOnInit() {

  }
  ngDoCheck() {
    if (this.status == "process"){
      this.color = "rgba(255,255,36,0.73)";
    }
    else if(this.status == "ended"){
      this.color = "rgba(0,255,0,0.54)";
    }
    else {

    }
  }

  ToComplete(){
    this.status = "ended";
  }
  IsFavorite(){
    if(this.isfavorite == false){
      this.star = "assets/favourite.png";
      this.isfavorite = true;
    }
    else {
      this.isfavorite = false;
      this.star = "assets/star.png";
    }
  }
}
