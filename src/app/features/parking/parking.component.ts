import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  imageUrl="https://www.hospitalitynet.org/picture/xxl_153084983.jpg?t=1513255017";
  imageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Hx7CTXC6gJA93kWn3_rj_gADPntVEEn0Ww&usqp=CAU";
  constructor() { }

  ngOnInit(): void {
  }

}
