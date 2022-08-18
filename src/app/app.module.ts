import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { NavbarComponent } from './mycontainer/navbar/navbar.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { TextSection1Component } from './mycontainer/text-section1/text-section1.component';
import { TextSection2Component } from './mycontainer/text-section2/text-section2.component';
import { BindingComponent } from './binding/binding.component';
import { StyleClassBindingComponent } from './style-class-binding/style-class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifElseComponent } from './ngif-else/ngif-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { FridgeComponent } from './product/fridge/fridge.component';
import { CardcardBodyComponent } from './cardcard-body/cardcard-body.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AbdulComponent } from './abdul/abdul.component';

// const appRoutes:Routes = [
//   {path: 'home' , component:HomeComponent},
//   {path: 'about' , component:AboutComponent},
//   {path: 'contact' , component:ContactComponent},
//   {path: 'product' , component:ProductComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    NavbarComponent,
    HeaderComponent,
    TextSection1Component,
    TextSection2Component,
    BindingComponent,
    StyleClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgifElseComponent,
    NgSwitchComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    BlogComponent,
    PagenotfoundComponent,
    LaptopComponent,
    MobileComponent,
    WashingmachineComponent,
    FridgeComponent,
    CardcardBodyComponent,
    ParentComponent,
    ChildComponent,
    AbdulComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
