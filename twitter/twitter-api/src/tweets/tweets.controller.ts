import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TwitterService } from 'src/twitter/twitter.service';
import { Tweet } from 'src/types';

@Controller('tweets')
export class TweetsController {
  constructor(private service: TwitterService) {}
  @Get()
  async getAll() {
    return await this.service.tweetCollection.find({}).toArray();
  }
  @Get(':handle')
  async getByHandle(@Param(':handle') handle: string) {
    return await this.service.tweetCollection
      .find((t) => t.handle === handle)
      .toArray();
  }
  @Post()
  async createTweet(@Body() tweet: Tweet) {
    let result = await this.service.tweetCollection.insertOne(tweet);
    if (result.acknowledged) {
      return tweet;
    }
  }
}
