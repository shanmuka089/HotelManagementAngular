import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoodItem } from "../model/foodItem";

@Injectable({
    providedIn:'root'
})
export class FoodItemServices{

    constructor(private httpClient:HttpClient){}

    getfoods():Observable<FoodItem[]>{
        return this.httpClient.get<FoodItem[]>("http://localhost:8080/com.htm/food-item");
    }

    savefoods(data:FoodItem){
        return this.httpClient.post<FoodItem>("http://localhost:8080/com.htm/food-item/",data);
    }

    getfood(data:number){
        return this.httpClient.get<FoodItem>("http://localhost:8080/com.htm/food-item/"+data);
    }

    updatefood(id:number,data:any){
        return this.httpClient.put<FoodItem>("http://localhost:8080/com.htm/food-item/"+id,data);
    }

    deletefood(id:number){
       return this.httpClient.delete<any>("http://localhost:8080/com.htm/food-item/"+id);
     }

}