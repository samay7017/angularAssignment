import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../data-type';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private userlogin:UserloginService ,private router:Router) { }
  signin:boolean=true;

  ngOnInit(): void {
    this.userlogin.reloadSeller(); 
  }
  signUpChange(){
    this.signin=false;
  }
  signInChange(){
    this.signin=true;
  }
  signUp(data:SignUp):void{
    console.log("signUp called");
    this.userlogin.userSignUp(data);
    this.signin=true;
    window.alert("Sign up Successfully done !");
    
  }
  signIn(data:SignIn):void{
    this.userlogin.userLogIn(data);
  }

 
}
