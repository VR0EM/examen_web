import { Component, Input } from '@angular/core';
import { LeftnavComponent } from '../leftnav/leftnav.component';
import { RightnavComponent } from '../rightnav/rightnav.component';
import { TwitterService } from '../twitter.service';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LeftnavComponent, RightnavComponent, TweetsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() handle: string | undefined;

  constructor(private service: TwitterService) {}

  get profile() {
    return this.service.getProfileByHandle(this.handle);
  }
  get tweets() {
    return this.service.getTweetByHandle(this.handle);
  }
  get avatar() {
    return '/images/avatars/' + this.handle + '.png';
  }
  get banner() {
    return '/images/banners/' + this.handle + '.png';
  }
}
