import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { FridgeComponent } from './product/fridge/fridge.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { ParentComponent } from './parent/parent.component';



const routes: Routes = [
  {path: '', redirectTo :'home', pathMatch :'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'buy produts' , component:ParentComponent},
  {path: 'product' , children :[
  {path:  ''       , component:ProductComponent},
  {path: 'laptop' , component:LaptopComponent},
  {path: 'mobile' , component:MobileComponent},
  {path: 'fridge' , component:FridgeComponent},
  {path: 'washingmachine' , component:WashingmachineComponent},
]},

  {path: 'blog' , component:BlogComponent},
  {path: '**' , component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
