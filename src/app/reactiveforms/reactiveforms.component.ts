import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { student } from './../directives/student';
import { ServiceService } from './../service/service.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/Forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
    res: any;
  
    id: number;
   
    employee:FormGroup;
  posts: Observable<any[]>;  
  element:any[];

 Myform: FormGroup;
post:any[];
   public modalRef: BsModalRef;
  constructor(private fb: FormBuilder,private service: ServiceService,private modalService: BsModalService)
{
  
 }

//  public openModalForEdit(template: TemplateRef<any>,modelData: any)
//   {
//       this.modalRef = this.modalService.show(template);
//       console.log(modelData.id);
//       this.id=modelData.id;
    


//  }
 
  ngOnInit() {
{
   
     this.Myform = this.fb.group({
      id:['', Validators.required],
      username: ['', Validators.required,Validators.minLength(3)],
      password: ['', Validators.required,Validators.minLength(3)],
  
    })
   
   
}
   this.get(this.posts);
  }
// get all data

  get(posts){
          return this.service.getAll().subscribe((posts) => {
            console.log(posts);
            this.posts = posts;
        });
        
  }
  get username()
  {
    return this.Myform.get('username');
  }

get password()
 { return this.Myform.get('password');


}
///Modal for Edit
 public openModalForEdit(template: TemplateRef<any>,modelData: any)
  {
      this.modalRef = this.modalService.show(template);
      console.log(modelData.id);
      this.id=modelData.id;
    


  }

/// Edit Form to submit changes 
  submitFormForEdit(model: any) {

     model.id=this.id;
    this.service.update(model).subscribe(
      data => {
        // this.toasterService.showToaster('Successfully Added');

             window.location.reload();
        console.log(model);
      },

    );
        console.log(model);
   
  }


  /// Modal for delete
 public openModalforDelete(template: TemplateRef<any>,modelData1: any)
  {
       this.res= modelData1
      this.modalRef = this.modalService.show(template);
    
    
 console.log(this.modalRef);

}


///delete form to submit changes
delete(model)


   {
       this.id=model.id
      this.service.delete(this.id).subscribe(
      data => {
   
             window.location.reload();
  console.log(model);
         },
      
      
     );

   


}

   //post data using angular form
      onSubmit(Myform:FormGroup)
      {
        console.log(this.employee);
       
       this.element = Myform.value;
         console.log(this.element);
          this.service.onCreate(this.element)
            .subscribe(
            newPost => {
              window.location.reload();
              
                console.log(newPost);
                this.element = newPost;
            });
             this.get(this.posts);
              this.employee.reset();
      }
      
 


}
