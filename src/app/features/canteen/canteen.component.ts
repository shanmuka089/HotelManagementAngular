import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css']
})
export class CanteenComponent implements OnInit {

  imageUrl="https://image.made-in-china.com/202f0j00aZSTteNsfhqj/Dining-Furniture-Sets-Canteen-Furniture-Sets-Hotel-Furniture-Restaurant-Furniture-Restaurant-Table-and-Chair-GLDN-019991-.jpg";
  canteenImage="cnateenImage"
  constructor() { }

  ngOnInit(): void {
  }

}
