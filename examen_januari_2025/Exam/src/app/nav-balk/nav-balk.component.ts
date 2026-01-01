import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-nav-balk',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './nav-balk.component.html',
  styleUrl: './nav-balk.component.css',
})
export class NavBalkComponent {
  constructor(private service: MenuserviceService) {}
  get totalPrice() {
    return this.service.totalPrice;
  }
}
