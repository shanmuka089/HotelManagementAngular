import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { FoodItem } from "../model/foodItem";


@Injectable({
    providedIn: "root"
})
export class OrederedService {

    foodItems: FoodItem[] = [];

    totalPrice: Subject<number> = new BehaviorSubject<number>(0);  
    totalQuantity: Subject<number> = new BehaviorSubject<number>(0);


    constructor() { }
    addToCart(item: FoodItem) {

    
        let alreadyExistsInCart: boolean = false;
        let existingCartItem: FoodItem = undefined!;

        if (this.foodItems.length > 0) {
          
            for (let foodItem of this.foodItems) {
                if (foodItem.itemId === item.itemId) {
                    existingCartItem = foodItem;
                    break;
                }
            }

        
            alreadyExistsInCart = (existingCartItem != undefined);
        }

        if (alreadyExistsInCart) {
           
            existingCartItem.quantity++;
        }
        else {
            
            this.foodItems.push(item);
        }

       
        this.computeCartTotals();
    }


    removeItem(removefood:FoodItem) {

        var index = this.foodItems.indexOf(removefood);
        if (index > -1) {
            this.foodItems.splice(index, 1);
          }
          this.computeCartTotals();
          return this.foodItems;
    }

    computeCartTotals() {

        let totalPriceValue: number = 0;
        let totalQuantityValue: number = 0;

        for (let currentFoodOrders of this.foodItems) {
            totalPriceValue += currentFoodOrders.quantity * currentFoodOrders.itemPrice;
            totalQuantityValue += currentFoodOrders.quantity;
        }

      
        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantityValue);

       
        this.logCartData(totalPriceValue, totalQuantityValue);
    }

    logCartData(totalPriceValue: number, totalQuantityValue: number) {

        console.log('Contents of the cart');
        for (let foodItem of this.foodItems) {
            const subTotalPrice = foodItem.quantity * foodItem.itemPrice;
            console.log(`name: ${foodItem.itemName}, quantity=${foodItem.quantity}, unitPrice=${foodItem.itemPrice}, subTotalPrice=${subTotalPrice}`);
        }

        console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
        console.log('----');
    }
}
