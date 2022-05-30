import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodItemServices } from 'src/app/dbServices/foodItemServices';
import { FoodItem } from 'src/app/model/foodItem';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {

  constructor(private route:Router,private foodService:FoodItemServices) { }

  ngOnInit(): void {
  }

  success:string|undefined;
  error:string|undefined;

  onSubmit(form:NgForm){

    console.log(form.value);
    const fooditem:FoodItem={
      itemId:form.value.itemId,
      itemName:form.value.itemName,
      itemImageUrl:form.value.itemImageUrl,
      itemPrice:form.value.itemPrice,
      quantity:form.value.quantity
    }
    console.log(fooditem);

    this.foodService.savefoods(fooditem).subscribe(data=>{
      console.log(data);
     this.success="food item added successfully";
    },err=>{
      this.error="an error occured while adding food item";
    })
    
  }

}
