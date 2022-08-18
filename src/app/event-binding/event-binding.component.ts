import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display:string=""
  onClick(event:any){
    this.display=event.target.value +"  "+ "added in your cart"
    
  }
  getInput(id:any){
    this.display=id.value
  }

}
