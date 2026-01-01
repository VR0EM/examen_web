import { Component, Input } from '@angular/core';
import { Tweet } from '../../types';
import { RouterLink } from '@angular/router';
import { TwitterService } from '../twitter.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.css',
})
export class TweetsComponent {
  @Input() tweet: Tweet | undefined;

  constructor(private service: TwitterService) {}

  get profile() {
    return this.service.getProfileByHandle(this.tweet?.handle);
  }
  get avatar() {
    return '/images/avatars/' + this.tweet?.handle + '.png';
  }
}
