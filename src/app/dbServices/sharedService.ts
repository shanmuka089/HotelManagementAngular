import { EventEmitter, Injectable } from "@angular/core";
import { FoodItem } from "../model/foodItem";


@Injectable({
    providedIn:"root"
})
export class SharedService{
    assignRole=new EventEmitter<string>();
}