import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-balk',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-balk.component.html',
  styleUrl: './nav-balk.component.css'
})
export class NavBalkComponent {
  @Input() step: string = "";
}
