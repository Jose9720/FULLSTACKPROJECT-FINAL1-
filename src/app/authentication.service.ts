import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /* authentication service is used to check the current credentials of username and password */

  constructor() { }

  authenticate(username : any,password : any) {
    if(username === "jose" && password === "jose@123"){
      sessionStorage.setItem('username',username)
      return true;
    } else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  } 
  logOut(){
    sessionStorage.removeItem('username')
  } 
}
