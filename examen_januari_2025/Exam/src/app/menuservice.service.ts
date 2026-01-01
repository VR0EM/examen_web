import { Injectable } from '@angular/core';
import * as menuJSON from '../lol.json';
import { MenuItem, Order } from '../types';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MenuserviceService {
  private _menuItems: MenuItem[] = menuJSON.menu;
  private _itemsOrdered: MenuItem[] = [];
  private _totalPrice: number = 0;
  private _orderId: number | undefined;

  constructor(private httpClient: HttpClient) {}

  get menuItems() {
    return this._menuItems;
  }
  get totalPrice() {
    return this._totalPrice;
  }
  get itemsOrdered() {
    return this._itemsOrdered;
  }
  get orderId() {
    return this._orderId;
  }
  addItemOrdered(item: MenuItem) {
    this._itemsOrdered.push(item);
    this._totalPrice = 0;
    this._itemsOrdered.forEach((m) => (this._totalPrice += m.price));
  }
  removeItemOrdered(item: MenuItem) {
    let index = this._itemsOrdered.findIndex((m) => m.id === item.id);
    this._itemsOrdered.splice(index, 1);
    this._totalPrice = 0;
    this._itemsOrdered.forEach((m) => (this._totalPrice += m.price));
  }
  async makeOrder(name: string) {
    let newOrder: Order = {
      name: name,
      items: this._itemsOrdered.map((item) => item.id),
    };

    // Mijn api werkt correct via thunderclient. Als ik deze echter gebruik in de applicatie, lukt dit niet.
    // let response = await firstValueFrom(
    //   this.httpClient.post<Order>('http://localhost:3000/order', newOrder)
    // );

    this._itemsOrdered = [];
    this._totalPrice = 0;

    this._orderId = 234;
  }
}
