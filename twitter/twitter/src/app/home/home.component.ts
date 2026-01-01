import { Component } from '@angular/core';
import { LeftnavComponent } from '../leftnav/leftnav.component';
import { RightnavComponent } from '../rightnav/rightnav.component';
import { TwitterService } from '../twitter.service';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftnavComponent, RightnavComponent, TweetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private service: TwitterService) {}

  get tweets() {
    return this.service.tweets;
  }
}
