import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBalkComponent } from "./nav-balk/nav-balk.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBalkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() step: string = "step1";
  title = 'MarsRovers';
}
