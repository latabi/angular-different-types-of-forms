import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { BindingComponent } from './binding.component';


import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { BindingRoutingModule } from "./binding-routing.module";


@NgModule({
  declarations: [BindingComponent
  
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
    BindingRoutingModule
  ],
  providers: []
 
})
export class BindingModule { }
