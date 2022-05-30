import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/dbServices/bookingService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { BookingHistoryModel } from 'src/app/model/bookingHistoryModel';

@Component({
  selector: 'app-customer-bookings',
  templateUrl: './customer-bookings.component.html',
  styleUrls: ['./customer-bookings.component.css']
})
export class CustomerBookingsComponent implements OnInit {

  
  p:number=1;

  searchText:any;

  bookingHistory:BookingHistoryModel[]|undefined;
  constructor(private bookingService:BookingService,private regService:RegistrationService) { }

  ngOnInit(): void {
  
    this.bookingService.getAllBookings().subscribe(data=>{
      this.bookingHistory=data;
    })
  }

}
