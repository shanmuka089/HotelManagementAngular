import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/dbServices/bookingService';
import { RoomServices } from 'src/app/dbServices/roomServices';
import { BookingHistoryModel } from 'src/app/model/bookingHistoryModel';
import { Paymentdetails } from 'src/app/model/payemntDetails';
import { RoomModel } from 'src/app/model/roomModel';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  bookingModel:BookingHistoryModel;
  rooms:RoomModel[];
  allocatedRoom:number;
  roomRent:number;
  additionalCharges:number;
  totalRent:number;
  numberOfDays:number;
  numberOfpersons:number;


  constructor(private bookingService:BookingService,private roomService:RoomServices,private router:Router,private activatedRoute:ActivatedRoute) { }


  name="hello";
  ngOnInit(): void {
    this.bookingModel=this.bookingService.bookingsHistory;
    console.log(this.bookingModel.checkInDate.substring(9,11));
    this.numberOfDays=parseInt(this.bookingModel.checkOutDate.substring(9,11))-parseInt(this.bookingModel.checkInDate.substring(9,11));
    console.log(this.numberOfDays);
    this.roomService.getRooms().subscribe(data=>{
      this.rooms=data;
      this.alloCateRoom();
      this.caluculateRoomBill();
    })
  }

  caluculateRoomBill(){
      const additionalChargesPerDay=(this.numberOfpersons-2)*500;
      this.additionalCharges=additionalChargesPerDay*this.numberOfDays;
      this.totalRent=this.additionalCharges+this.roomRent;

  }

  alloCateRoom(){
    this.numberOfpersons=this.bookingModel.noPersons;
   if(this.numberOfpersons<5){

    console.log(this.numberOfpersons);
   for (let index = 0; index < this.rooms.length; index++) {
          if(!this.rooms[index].roomUse){
              this.allocatedRoom=this.rooms[index].roomId;
              this.roomRent=this.rooms[index].roomRent*this.numberOfDays;
          }
      }
   }

  }

  payNow(){
    const details=new Paymentdetails();
    details.totalRent=this.totalRent;
    details.roomRent=this.roomRent;
    details.additionalCharges=this.additionalCharges;
    this.bookingService.payService(details);
    this.router.navigate(['pay-now'],{relativeTo:this.activatedRoute});
  }




}
