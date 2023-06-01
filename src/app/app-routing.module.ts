import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { InfoPageComponent } from './info-page/info-page.component';


const routes: Routes = [
  {
    path:'',component:AuthenticationComponent
  },
  {
    path:'info-page' ,component:InfoPageComponent , canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
