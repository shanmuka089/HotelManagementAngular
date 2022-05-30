import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/dbServices/bookingService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { BookingHistoryModel } from 'src/app/model/bookingHistoryModel';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookingHistory:BookingHistoryModel[]|undefined;
  constructor(private bookingService:BookingService,private regService:RegistrationService) { }

  ngOnInit(): void {
    this.bookingService.getCurrentBookings(this.regService.getSignedinUser()).subscribe(data=>{
      this.bookingHistory=data;
    })
  }

  deleteBooking(){
    // this.bookingService.deleteCurrentBookings(this.regService.getSignedinUser()).subscribe(data=>{
    //   console.log("bookimg history deleted successfully!...");
    // })
  }

}
