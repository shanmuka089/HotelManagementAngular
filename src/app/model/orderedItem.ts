import { FoodItem } from "./foodItem";

export class OrederedItem {

    itemId: number;
    itemName: string;
    itemImageUrl: string;
    itemPrice: number;

    quantity: number;

    constructor(food:FoodItem ) {
        this.itemId =food.itemId;
        this.itemName = food.itemName;
        this.itemImageUrl = food.itemImageUrl;
        this.itemPrice = food.itemPrice;

        this.quantity = 1;
    }
}