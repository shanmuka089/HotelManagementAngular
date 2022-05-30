import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './adminservices/services.component';
import { FeaturesComponent } from './features/features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomServices } from './dbServices/roomServices';
import { CanteenComponent } from './features/canteen/canteen.component';
import { ParkingComponent } from './features/parking/parking.component';
import { AcRoomsComponent } from './features/ac-rooms/ac-rooms.component';
import { SwimmingPoolComponent } from './features/swimming-pool/swimming-pool.component';
import { CustomersListComponent } from './adminservices/customers-list/customers-list.component';
import { RoomsListComponent } from './adminservices/rooms-list/rooms-list.component';
import { CustomerBookingsComponent } from './adminservices/customer-bookings/customer-bookings.component';
import { AddRoomComponent } from './adminservices/add-room/add-room.component';
import { EditRoomComponent } from './adminservices/edit-room/edit-room.component';
import { EditProfileComponent } from './about/edit-profile/edit-profile.component';
import { SettingsComponent } from './about/settings/settings.component';
import { BookingsComponent } from './about/bookings/bookings.component';
import { BookingHistoryComponent } from './profile/booking-history/booking-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingService } from './dbServices/bookingService';
import { CustomerService } from './dbServices/customerService';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './dbServices/RegistrationService';

import { RoomBookingComponent } from './profile/room-booking/room-booking.component';
import { OrderFoodComponent } from './profile/order-food/order-food.component';
import { OrderedFoodsComponent } from './profile/ordered-foods/ordered-foods.component';
import { HttpInterceptorService } from './dbServices/HttpInterceptorService';
import { CheckOutComponent } from './profile/room-booking/check-out/check-out.component';
import { CardDetailsComponent } from './profile/room-booking/check-out/card-details/card-details.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FoodOrdersListComponent } from './profile/food-orders-list/food-orders-list.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ForgotComponent } from './login/forgot-password/forgot.component';
import { AdminRegisterComponent } from './adminservices/admin-register/admin-register.component';
import { AddFoodItemComponent } from './adminservices/add-food-item/add-food-item.component';
import { FoodItemsComponent } from './adminservices/food-items/food-items.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    FeaturesComponent,
    ContactUsComponent,
    ProfileComponent,
    HeaderComponent,
    AboutComponent,
    CanteenComponent,
    ParkingComponent,
    AcRoomsComponent,
    SwimmingPoolComponent,
    CustomersListComponent,
    RoomsListComponent,
    CustomerBookingsComponent,
    AddRoomComponent,
    EditRoomComponent,
    EditProfileComponent,
    SettingsComponent,
    BookingsComponent,
    BookingHistoryComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    RoomBookingComponent,
    OrderFoodComponent,
    OrderedFoodsComponent,
    CheckOutComponent,
    CardDetailsComponent,
    ForgotComponent,
    FoodOrdersListComponent,
    AdminRegisterComponent,
    AddFoodItemComponent,
    FoodItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [RoomServices, BookingService, CustomerService, RegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
