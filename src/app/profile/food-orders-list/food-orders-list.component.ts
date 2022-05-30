import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from 'src/app/dbServices/foodOrderService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';
import { FoodOrderedItems } from 'src/app/model/foodOrderItem';

@Component({
  selector: 'app-food-orders-list',
  templateUrl: './food-orders-list.component.html',
  styleUrls: ['./food-orders-list.component.css']
})
export class FoodOrdersListComponent implements OnInit {


  foodOrders:FoodOrderedItems[]|undefined;
  username:string|undefined;

  p:number=1;

  searchText:any;

  constructor(private orderedfoodService:FoodOrderService,private regService:RegistrationService) { }

  ngOnInit(): void {
    this.username=this.regService.getSignedinUser();
    this.orderedfoodService.getFoodOrderByName(this.username).subscribe(data=>{
      this.foodOrders=data
      console.log(data);
    },err=>{
      console.log("error occured");
    })
  }

}
