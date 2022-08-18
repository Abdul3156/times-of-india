import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class-binding',
  templateUrl: './style-class-binding.component.html',
  styleUrls: ['./style-class-binding.component.css']
})
export class StyleClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mystyle:string="20px"
  isactive:boolean=false
  myproperty:boolean=false;
  myclass= {
       class1:true,
       class2:false,
       class3:true,
     }
     mstyle={
       'background':"red",
       'border':"2px solid blue "
     }

  
}
