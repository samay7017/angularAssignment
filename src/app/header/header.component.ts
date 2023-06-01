import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route:Router){ }
  logoutvisible:boolean;
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('user')){
          console.log("already user is logged in");
          this.logoutvisible=true;
        }
        else{
          this.logoutvisible=false;      }
      }  
    })
  }

  logout(){
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }
 
  
}
