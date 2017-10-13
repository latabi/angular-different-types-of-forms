import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
binding ="types of binding";
email="lata@email.com";
imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5gbBJlpb9xTj7CYBT-p4e-oqjniHdvwe8tnMG0Srr-SfbxZ5";
onSave()
{
  console.log (this.email);
}
 

 

}
