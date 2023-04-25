import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {



  message = '';
  constructor(
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeForm(){
  alert("Thanks for your feedback");
}}





