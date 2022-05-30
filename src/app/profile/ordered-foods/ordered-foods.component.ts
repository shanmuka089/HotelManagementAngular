import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodOrderService } from 'src/app/dbServices/foodOrderService';
import { OrederedService } from 'src/app/dbServices/oredereService';
import { RegistrationService } from 'src/app/dbServices/RegistrationService';

import { FoodItem } from 'src/app/model/foodItem';
import { FoodOrderedItems } from 'src/app/model/foodOrderItem';

@Component({
  selector: 'app-ordered-foods',
  templateUrl: './ordered-foods.component.html',
  styleUrls: ['./ordered-foods.component.css']
})
export class OrderedFoodsComponent implements OnInit {

  constructor(private orderService: OrederedService,private foodOrdersService:FoodOrderService,private regService:RegistrationService) { }

  foodOreders: FoodItem[] = [];
  totalPrice:number=0;
  totalQuantity:number=0;
  foodOrderItems:string[]=[];
  foodOrder:FoodOrderedItems;

  isPayment=false;

  error="";
  success="";

  ngOnInit(): void {
    this.listOrederedFoods();
  }

  listOrederedFoods() {
    this.foodOreders = this.orderService.foodItems

    this.orderService.totalPrice.subscribe(data=>{
      this.totalPrice=data
    });

    this.orderService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );
  }

  onCancelOrder(item: FoodItem) {
    this.orderService.removeItem(item);
    this.ngOnInit();
  }

  onPayNow(){
      this.isPayment=true;
  }

  onPay(form:NgForm){
    this.foodOreders.forEach(element => {
        this.foodOrderItems.push(element.itemName);
    });
    this.foodOrder={
      username:this.regService.getSignedinUser(),
      foodItems:this.foodOrderItems,
      totalPrice:this.totalPrice,
      totalQuantity:this.totalQuantity,
      creditCardNumber:form.value.cardNumber,
      ifscCode:form.value.IfscCode
    } 

    this.foodOrdersService.saveFoodOrders(this.foodOrder).subscribe(data=>{
          this.error="";
          this.success="*your payment is successful!.."
          console.log(data);
    },err=>{
      this.success="";
      this.error="*error occured your payment not successful!.."
    })
      
  }

  
}
