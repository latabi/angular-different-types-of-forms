import { FormGroup, FormControl, Validators } from '@angular/Forms';
import { student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
name="lo";
students=[ new student(1, 'lata'),
  new student(2, 'praneet'),
  new student(3, 'diksha'),
  new student(4, 'prajkta')];

  
// form= new FormGroup({
//   username:new FormControl('',[Validators.required,Validators.minLength(3)]),
//  password:new FormControl('',Validators.required) 
// });
// get username()
//   {
//     return this.form.get('username');
//   }

// get password()
//  { return this.form.get('password');


// }

 }






