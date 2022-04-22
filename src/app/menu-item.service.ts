import { Injectable } from '@angular/core';
import { FoodItem } from './FoodItem';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  menuItems:Array<FoodItem>=[
    {
      itemCode:'P1001',
      itemName:'Pizza',
      itemType:'Non Veg',
      price:299
    },
    {
      itemCode:'P1002',
      itemName:'Pasta',
      itemType:'Veg',
      price:199
    }
    , {
      itemCode:'P1003',
      itemName:'Dosa',
      itemType:'Veg',
      price:99
    }
  ];


  addMenuItem(foodItem:FoodItem){
    this.menuItems.push(foodItem);
   
  }
}

