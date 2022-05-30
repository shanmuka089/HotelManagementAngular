import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swimming-pool',
  templateUrl: './swimming-pool.component.html',
  styleUrls: ['./swimming-pool.component.css']
})
export class SwimmingPoolComponent implements OnInit {

  imageUrl="https://www.palandscapegroup.com/wp-content/uploads/2015/03/1Werzyn2-1080x675.jpg";
  imageUrl2="https://aquavisionspools.com/wp-content/uploads/2018/02/0001_2.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
