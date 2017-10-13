import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


import { ServiceService } from './service/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';


import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { HttpModule } from "@angular/http";




@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    ReactiveformsComponent,

  
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [ServiceService,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
