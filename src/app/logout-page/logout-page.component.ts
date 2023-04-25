import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit  {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
}
  
ngOnInit() {
  
  this.authenticationService .logOut() ;
}
confirmLogout(){
  var status= confirm("Are you sure want to logout?");
   if (status==true) {
     this.router.navigate(['logout-page']);
   }
   else{
    
    
    this.router.navigate(['feedback']);
  

   }


}


}

