import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingHistoryComponent } from './profile/booking-history/booking-history.component';
import { BookingsComponent } from './about/bookings/bookings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AcRoomsComponent } from './features/ac-rooms/ac-rooms.component';
import { CanteenComponent } from './features/canteen/canteen.component';
import { FeaturesComponent } from './features/features.component';
import { ParkingComponent } from './features/parking/parking.component';
import { SwimmingPoolComponent } from './features/swimming-pool/swimming-pool.component';

import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './login/forgot-password/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FoodOrdersListComponent } from './profile/food-orders-list/food-orders-list.component';
import { OrderFoodComponent } from './profile/order-food/order-food.component';
import { OrderedFoodsComponent } from './profile/ordered-foods/ordered-foods.component';
import { ProfileComponent } from './profile/profile.component';
import { CardDetailsComponent } from './profile/room-booking/check-out/card-details/card-details.component';
import { CheckOutComponent } from './profile/room-booking/check-out/check-out.component';
import { RoomBookingComponent } from './profile/room-booking/room-booking.component';
import { AddRoomComponent } from './adminservices/add-room/add-room.component';
import { AdminRegisterComponent } from './adminservices/admin-register/admin-register.component';
import { CustomerBookingsComponent } from './adminservices/customer-bookings/customer-bookings.component';
import { CustomersListComponent } from './adminservices/customers-list/customers-list.component';
import { EditRoomComponent } from './adminservices/edit-room/edit-room.component';
import { RoomsListComponent } from './adminservices/rooms-list/rooms-list.component';
import { ServicesComponent } from './adminservices/services.component';
import { AddFoodItemComponent } from './adminservices/add-food-item/add-food-item.component';
import { FoodItemsComponent } from './adminservices/food-items/food-items.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'customer-bookings', component: CustomerBookingsComponent },
  { path: 'show-rooms', component: RoomsListComponent },
  { path: 'delete-room', redirectTo: 'show-rooms' },
  { path: 'signOut',redirectTo:'home'},
  { path: 'log-in', component: LoginComponent },
  { path: 'forgot-password',component:ForgotComponent},
  { path: 'my-bookings',component:BookingsComponent},
  { path:'admin-register',component:AdminRegisterComponent},
  {path:'show-foods',component:FoodItemsComponent},
  { path:'add-food',component:AddFoodItemComponent},
  { path: 'user-profile', component: ProfileComponent,
    children:[
      { path: 'booking-room',component:RoomBookingComponent},
      {path:'booking-room/checkOut',component:CheckOutComponent,
      children:[
      { path: 'pay-now',component:CardDetailsComponent}
      ]},
      { path: 'booking-history',component:BookingHistoryComponent},
      { path: 'order-food',component:OrderFoodComponent},
      { path:'food-cart',component:OrderedFoodsComponent},
      { path: 'ordered-foods',component:FoodOrdersListComponent}
    ]},
  { path: 'register-here', component: SignUpComponent },
  { path: 'edit-room', component: EditRoomComponent },
  { path: 'show-customers', component: CustomersListComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'features', component: FeaturesComponent },
  { path: "canteen", component: CanteenComponent },
  { path: "acRooms", component: AcRoomsComponent },
  { path: "swimmingPool", component: SwimmingPoolComponent },
  { path: "parking", component: ParkingComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
