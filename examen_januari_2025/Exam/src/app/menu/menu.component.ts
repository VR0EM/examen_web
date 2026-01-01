import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MenuItem } from '../../types';
import { RouterLink } from '@angular/router';
import { NavBalkComponent } from '../nav-balk/nav-balk.component';
import { MenuserviceService } from '../menuservice.service';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NavBalkComponent,
    CurrencyPipe,
    FormsModule,
    ShoppingCartComponent,
    RouterLink,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  filter: string = '';
  price: number = 0;
  constructor(private service: MenuserviceService) {}

  get menuItems() {
    this.orderedItems.forEach((m) => (this.price += m.price));
    return this.service.menuItems;
  }

  addItem(item: MenuItem) {
    this.service.addItemOrdered(item);
  }
  removeItem(item: MenuItem) {
    this.service.removeItemOrdered(item);
  }
  get orderedItems() {
    return this.service.itemsOrdered;
  }

  get totalPrice() {
    return this.service.totalPrice;
  }
  ngOnInit() {}
}
