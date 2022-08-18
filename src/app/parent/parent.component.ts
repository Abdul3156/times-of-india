import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productselected:boolean=false;
  selecteditem:string=""
  onaddedproduct:any

  onproductclick(product:any){
    this.productselected=true;
    this.selecteditem=product;
  }
  onaddevent(){
    this.onaddedproduct=this.selecteditem;
  }

}
