import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/dbServices/bookingService';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  roomRent:number;
  additionalCharges:number;
  totalRent:number;

  error: string = '';
	success: string = '';

  constructor(private Service:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.roomRent=this.Service.paymentService.roomRent;
    this.totalRent=this.Service.paymentService.totalRent;
    this.additionalCharges=this.Service.paymentService.additionalCharges;
  }

  onPay(form:NgForm){
    console.log(form.value);
    this.Service.saveBookings(this.Service.bookingsHistory).subscribe(data=>{
      console.log(data);
      this.success = "*congratulations your booking is successfull!..";
    },err=>{
      this.error = '*Something went wrong during booking!..';
    })
  }

}
