import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{
  username: string | undefined;
  password : string | undefined ;
  email: string | undefined;
  confirmpassword: string | undefined ; 
  /*invalidLogin = false
  emessage !: string;*/
constructor(
  
  private router: Router) {}

ngOnInit() { 

}

/*register()
{     alert("registered successfully");
this.router.navigate(['login-page']);
}

}*/

register(){
  if(this.username === '' || this.email === '' || this.password === '' || this.confirmpassword ===''){
    var status = confirm("Please fill it is required field");
  }

  else{
    var status=confirm("Registered successfully");
    if(status==true){
      this.router.navigate(['home-page']);
    
    }
  }

}}