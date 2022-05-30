import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/dbServices/bookingService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { BookingHistoryModel } from 'src/app/model/bookingHistoryModel';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {


  p:number=1;

  searchText:any;

  username:string

  bookingHistory:BookingHistoryModel[]|undefined;
  constructor(private bookingService:BookingService,private regService:RegistrationService) { }

  ngOnInit(): void {
    this.username=this.regService.getSignedinUser();
    this.bookingService.getBookings(this.username).subscribe(data=>{
      this.bookingHistory=data;
    })
  }

}
