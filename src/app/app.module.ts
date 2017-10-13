import { BindingComponent } from './binding/binding.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

import { ServiceService } from './service/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';




import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";




@NgModule({
  declarations: [
    AppComponent,
  
   




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
   
    HttpModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  providers: [ServiceService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
