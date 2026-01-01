import { Component, Input } from '@angular/core';
import { Order } from '../../types';
import { NavBalkComponent } from '../nav-balk/nav-balk.component';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [NavBalkComponent],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css',
})
export class OrderStatusComponent {
  constructor(private service: MenuserviceService) {}
  get id() {
    return this.service.orderId;
  }
  ngOnInit() {}
}
