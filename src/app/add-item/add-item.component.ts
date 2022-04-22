import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../FoodItem';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  menuItems:Array<FoodItem>=[];

  ngOnInit(): void {
  }

  addMenuItem(foodItem:FoodItem){
    this.menuItems.push(foodItem);
     console.log(this.menuItems);
     this.menuItems.push(foodItem);
  
  }

}
