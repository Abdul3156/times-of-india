import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title="abdullah"

  constructor() { }

  ngOnInit(){

  }
  method(){
    return (`my name is abdullah ${this.title}`)
  }

  mystatus:boolean=false
  online="yes"
  offline="no"

  enable:boolean=false

}
