import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
   contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
      this.contactForm=this.formBuilder.group({
        name:[null,Validators.required],
        email:[null,[Validators.required,Validators.email]],
        message:[null,Validators.required]
      })

  }

  submitData(value:any){
      console.log(value);
  }
}
