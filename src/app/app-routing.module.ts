import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ViewRestaurantdetailsComponent } from './view-restaurantdetails/view-restaurantdetails.component';
import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails/update-restaurantdetails.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuardService } from './auth-guard.service';

/* there are the path for the sub components and we are importing the respective components*/

const routes: Routes = [
  {path: 'restaurant', component: RestaurantListComponent,canActivate:[AuthGuardService]},
  {path: 'create-restaurant',component: CreateRestaurantComponent,canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'update-Restaurantdetails/:hotelId',component: UpdateRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path: 'restaurant/:hotelId',component: ViewRestaurantdetailsComponent,canActivate:[AuthGuardService] },
  {path: 'login-page', component: LoginPageComponent},
  {path: 'logout-page', component: LogoutPageComponent},
  {path: 'profile-card', component: ProfileCardComponent,canActivate:[AuthGuardService]},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'home-page', component: HomePageComponent,canActivate:[AuthGuardService]},
  {path: 'contact-us', component: ContactUsComponent,canActivate:[AuthGuardService]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
