import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ac-rooms',
  templateUrl: './ac-rooms.component.html',
  styleUrls: ['./ac-rooms.component.css']
})
export class AcRoomsComponent implements OnInit {

  imageUrl="https://3.imimg.com/data3/DR/FX/MY-16265163/ac-rooms-500x500.png";
  imageUrl2="https://res.cloudinary.com/simplotel/image/upload/x_47,y_0,w_4832,h_2718,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/the-signature-inn-hotel-bangalore/Deluxe_Triple_Non_Ac_Room_1_The_Signature_Inn_Hotel_Bangalore_ucqbiy"
  constructor() { }

  ngOnInit(): void {
  }

}
