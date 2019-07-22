import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  OnUp(event){
    console.log(event.target.value)
  }

}
