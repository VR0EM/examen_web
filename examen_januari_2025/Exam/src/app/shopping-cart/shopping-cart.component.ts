import { Component } from '@angular/core';
import { MenuserviceService } from '../menuservice.service';
import { MenuItem } from '../../types';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  constructor(private service: MenuserviceService) {}
  get orderedItems() {
    return this.service.itemsOrdered;
  }
  removeItem(item: MenuItem) {
    this.service.removeItemOrdered(item);
  }
}
