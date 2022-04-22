import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  @Input('status') status = '';

  constructor(public _menuItemService:MenuItemService) { }

  // ngOnChanges(changes: SimpleChanges): void {
    
  //   alert("Back to "+this.status);

  // }

  ngOnInit(): void {
  }
}