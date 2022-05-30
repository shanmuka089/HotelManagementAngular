import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoodOrderedItems } from "../model/foodOrderItem";

@Injectable({
    providedIn:"root"
})
export class FoodOrderService{

    constructor(private http:HttpClient){}

    saveFoodOrders(foods:FoodOrderedItems):Observable<FoodOrderedItems>{
        return this.http.post<FoodOrderedItems>("http://localhost:8080/com.htm/food-orders",foods);
    }

    getFoodOrders():Observable<FoodOrderedItems[]>{
        return this.http.get<FoodOrderedItems[]>("http://localhost:8080/com.htm/food-orders");
    }

    getFoodOrderByName(name:string):Observable<FoodOrderedItems[]>{
        return this.http.get<FoodOrderedItems[]>("http://localhost:8080/com.htm/food-orders/"+name);
    }

}