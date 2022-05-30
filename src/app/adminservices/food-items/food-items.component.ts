import { Component, OnInit } from '@angular/core';
import { FoodItemServices } from 'src/app/dbServices/foodItemServices';
import { FoodItem } from 'src/app/model/foodItem';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {


  items:FoodItem[]|undefined;
  
  searchText:any|undefined;

  p:number|undefined;
  
  constructor(private foodItemService:FoodItemServices) { }

  ngOnInit(): void {
    this.foodItemService.getfoods().subscribe(data=>{
      this.items=data;
    })
  }

  onDelete(id:number){
    this.foodItemService.deletefood(id).subscribe(data=>{
      this.ngOnInit();
      console.log(data.resp.statusCode);
      console.log(data.resp.message);
    },err=>{
      console.log("an error occured while deleting an item");
    })

  }

}
