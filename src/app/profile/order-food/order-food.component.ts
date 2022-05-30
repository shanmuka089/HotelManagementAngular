import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/model/foodItem';
import {SharedService} from 'src/app/dbServices/sharedService'
import { OrederedItem } from 'src/app/model/orderedItem';
import { OrederedService } from 'src/app/dbServices/oredereService';
import { FoodItemServices } from 'src/app/dbServices/foodItemServices';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.css']
})
export class OrderFoodComponent implements OnInit {

  constructor(private orderService:OrederedService,private foodItemService:FoodItemServices) { }


  foodItems:FoodItem[]|undefined;

  ngOnInit(): void {
   this.foodItemService.getfoods().subscribe(data=>{
     this.foodItems=data;
   })

  }

  onAddToCart(item:FoodItem){
    const oreder_item=new OrederedItem(item);
    this.orderService.addToCart(oreder_item);
  }



}
