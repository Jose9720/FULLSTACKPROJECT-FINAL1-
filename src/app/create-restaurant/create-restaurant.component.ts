import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent  implements OnInit{

  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRestaurant(){
    this.restaurantService.createRestaurant(this.restaurant).subscribe( data  =>{
      console.log(data);

      var status=confirm("inserted successfully");
    if(status==true){
      this.router.navigate(['/restaurant']);
    }
        
    

    else{
      this.router.navigate(['/create-restaurant']);
    }
  },
      error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/restaurant']);
  }
/*Onsubmit method allows users to submit their name and address using [(ng model)](event binding) . */
  onSubmit(){
    console.log(this.restaurant);
    this.saveRestaurant();
  }
}
