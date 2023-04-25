import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit {

  
name ='';
email ='';
message ='';

  constructor(public loginService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
   
  }
   
  
  /* submit(){
    var status=confirm("submitted!");
      if(status==true){
        this.router.navigate(['/restaurant']);
      }
   }*/

   contact(){
    if(this.name === '' || this.email === '' ||  this.message === ''){
      var status = confirm("It is required field");
    }
    else{
  var status=confirm("Thank you we will reach you soon");
  if(status==true){
    this.router.navigate(['/home-page'])
  }
  
}
}
}
  



  
  