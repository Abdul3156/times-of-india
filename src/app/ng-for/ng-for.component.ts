import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 products=[
   {proimage:"", name:'tv' , id:'30d' , price:20000},
   {proimage:"", name:'fridge' , id:'40g' , price:19000}, 
   {proimage:"", name:'washingmachine' , id:'50d' , price:67000},
   {proimage:"", name:'mobile' , id:'70d' , price:5700},
]
}
