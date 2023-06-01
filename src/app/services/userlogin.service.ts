import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignIn, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient ,private router:Router) { }

  userSignUp(data:SignUp){
      this.http.post("http://localhost:3000/users",data,{observe:'response'}).subscribe((result)=>{
      this.isUserLoggedIn.next(true);
      if(result){
        this.router.navigate(['/']);
      }
    });
  }

  reloadSeller(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['/info-page']);
    }
  } 
  userLogIn(data: SignIn){
    console.log(data);
    this.http.get(`http://localhost:3000/users?username=${data.username}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        this.isUserLoggedIn.next(true);
        this.router.navigate(['/info-page']);
        console.log("user logged in");
        localStorage.setItem("user" ,JSON.stringify(result.body));
        
      }
      else{
        console.log("user could not logged in");
        this.isLoginError.emit(true);
      }
    });
    
  }
}
