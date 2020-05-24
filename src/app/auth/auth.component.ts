import { Component, OnInit } from '@angular/core';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import {AuthService,SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user:SocialUser;
  constructor(private authservice:AuthService,private router:Router) { }


  ngOnInit(): void {

    this.authservice.authState.subscribe(user=>{
      this.user=user;
    })
  }
  
  signingoogle():void {
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID)

  }
  routerhome(){
    this.router.navigate(['/home']);
  }
  signinface():void{
    this.authservice.signIn(FacebookLoginProvider.PROVIDER_ID)
   
  }

  signoutgoogle():void{
    this.authservice.signOut();
  }


}

