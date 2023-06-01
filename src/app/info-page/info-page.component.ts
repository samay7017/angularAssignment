import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  users:{name:string , college: string ,degree:string , specialization:string}[]=[];
  @ViewChild('myForm') form:NgForm;
  constructor() { }
 

  ngOnInit(): void {

  } 
  onFormSubmit(){
    const object= this.form.value;
    this.users.push(object);
    console.log(this.users);
    console.log(this.form);
  }

  onCancel(){
    this.form.reset;
  }
  onSubmit(){
    setTimeout(()=>{this.form.reset();},1000);
    
  }
}
