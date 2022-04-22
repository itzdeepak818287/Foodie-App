import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../FoodItem';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private _menuItemService:MenuItemService) { }

  

  ngOnInit(): void {
  }

  addMenuItem(foodItem:FoodItem){
    this._menuItemService.menuItems.push(foodItem);
  }

}
