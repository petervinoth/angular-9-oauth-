import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from '../app/home/home.component';
import {AuthComponent} from '../app/auth/auth.component';

const routes:Routes=[
  
    { path:'home',component:HomeComponent},
    {path:'login',component:AuthComponent},
    
  ];

@NgModule({  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]  
  })  
  export class AppRoutingModule { }  