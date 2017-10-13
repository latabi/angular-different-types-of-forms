import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { DirectivesComponent } from './directives.component';

import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { DirectivesRoutingModule } from "./directives-routing.module";


@NgModule({
  declarations: [DirectivesComponent
  
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      
    DirectivesRoutingModule
  ],
  providers: []
 
})
export class DirectivesModule { }
