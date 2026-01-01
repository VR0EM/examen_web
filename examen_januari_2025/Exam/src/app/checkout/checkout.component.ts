import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavBalkComponent } from '../nav-balk/nav-balk.component';
import { MenuserviceService } from '../menuservice.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavBalkComponent, CurrencyPipe, ShoppingCartComponent, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  orderName: string = '';
  orderMade: boolean = false;
  constructor(private service: MenuserviceService) {}

  get totalPrice() {
    return this.service.totalPrice;
  }
  get orderedItems() {
    return this.service.itemsOrdered;
  }
  get validOrder() {
    if (this.orderName.length > 0 && this.orderedItems.length > 0) {
      return true;
    }
    return false;
  }
  get id() {
    return this.service.orderId;
  }
  setName(newName: string) {
    this.orderName = newName;
  }
  makeOrder() {
    this.orderMade = true;
    this.service.makeOrder(this.orderName);
  }
}
