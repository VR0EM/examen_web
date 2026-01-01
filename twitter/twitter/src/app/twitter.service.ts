import { Injectable } from '@angular/core';
import * as twitterJSON from '../twitter.json';
import { Profile, Tweet } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  private _profiles: Profile[] = twitterJSON.profiles;
  private _tweets: Tweet[] = twitterJSON.tweets;

  constructor() {}

  get profiles() {
    return this._profiles;
  }
  get tweets() {
    return this._tweets.sort(
      (a, b) =>
        new Date(b.createdOn!).getTime() - new Date(a.createdOn!).getTime()
    );
  }

  getProfileByHandle(handle: string | undefined) {
    return this._profiles.find((p) => p.handle === handle);
  }
  getTweetByHandle(handle: string | undefined) {
    return this._tweets
      .filter((t) => t.handle === handle)
      .sort(
        (a, b) =>
          new Date(b.createdOn!).getTime() - new Date(a.createdOn!).getTime()
      );
  }
}
