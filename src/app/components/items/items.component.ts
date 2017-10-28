import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState = false;
  itemToEdit: Item;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      // console.log(items);
    });
  }

  deleteItem(event, item: Item) {
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
}
