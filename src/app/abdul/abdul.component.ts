import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdul',
  templateUrl: './abdul.component.html',
  styleUrls: ['./abdul.component.css']
})
export class AbdulComponent implements OnInit {

  @Input() myInput=""
  @Output() input:EventEmitter<string>= new EventEmitter();
  outstring="hello i am your child"
  constructor() { 

  

  }

  ngOnInit(): void {
   
    }
    data() {
      this.input.emit(this.outstring)

    console.log(this.myInput)
  }

}
