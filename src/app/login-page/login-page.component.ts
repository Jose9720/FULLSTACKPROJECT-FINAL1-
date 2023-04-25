import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false
  emessage !: string;

  constructor(private router: Router,
    private loginservice: AuthenticationService){}

    ngOnInit(){
    }

    checkLogin(){
      if (this.loginservice.authenticate(this.username, this.password) 
      ){
        this.router.navigate(['restaurant']);
        console.log("navigate..");
        this.invalidLogin = false;
        alert("Logged in successfully");
      }else 
      this.invalidLogin = true;
      this .emessage ='Username or password is invalid';
      /*this.emessage = 'enter correct details';*/
  }

}

