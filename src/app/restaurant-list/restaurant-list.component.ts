import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: Restaurant[] = [];

  restaurantName: any;


  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants(){
    this.restaurantService.getRestaurantDetails().subscribe(data => {
      this.restaurant = data;


    });
  }

  restaurantDetails(hotelId: number){
    this.router.navigate(['restaurant', hotelId]);
  }

  updateRestaurant(hotelId: number){
    this.router.navigate(['update-Restaurantdetails', hotelId]);//<!
  }

  deleteRestaurant(hotelId: number){
    this.restaurantService.deleteRestaurant(hotelId).subscribe (data => {
      console.log(data);
      this.getRestaurants();
    })
  }
  confirmDelete(restaurant: Restaurant){
    var status= confirm("Are you sure you want to delete this record?");
     if (status==true) {
       this.deleteRestaurant(restaurant.hotelId);
          }
     else{
      this.getRestaurants();
     }
    }
    removeAllRestaurant(): void{
  
      this.restaurantService.deleteAll().subscribe(
        data=> {
          console.log(data);
          this.getRestaurants();
        },
        error => {
          console.log(error);
        });
    }
  
    searchByName(){
      this.restaurantService.findByName(this.restaurantName).subscribe(data=>{
        this.restaurant=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
      );
      
    }

    confirmDeleteAll(){
      var status= confirm(" All the records will be delete.Still you want to delete");
      if (status==true){
        this.removeAllRestaurant();
      }
      else{
        this.getRestaurants();
      }
      }
      fetchVegHotel(){
        this.restaurantService.findByVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
      fetchNonVegHotel(){
        this.restaurantService.findByNonVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
    }


    