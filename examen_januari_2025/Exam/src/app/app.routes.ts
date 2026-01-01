import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderStatusComponent } from './order-status/order-status.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CheckoutComponent },
  { path: 'order-status/:orderId', component: OrderStatusComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
];
