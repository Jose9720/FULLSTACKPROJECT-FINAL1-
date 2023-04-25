import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  message = '';
  constructor(
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
exit(){
  alert("Thanks for your feedback");
}}

 

/*if(this.message == ''){
  var status = confirm("It is required field");
  
}
else{
var status=confirm("Thanks for your feedback");
if(status==true){
this.router.navigate(['/home-page'])
}}}}*/