import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './binding/binding.module#BindingModule'
    // },
      {
        path: 'binding',
        loadChildren: './binding/binding.module#BindingModule'
    },
     {
        path: 'directives',
        loadChildren: './directives/directives.module#DirectivesModule'
    },
   
     {
        path: 'reactiveforms',
        loadChildren: './reactiveforms/reactiveforms.module#ReactiveFormModule'
    }
    

];
@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}