import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesController } from './profiles/profiles.controller';
import { TweetsController } from './tweets/tweets.controller';
import { TwitterService } from './twitter/twitter.service';

@Module({
  imports: [],
  controllers: [AppController, ProfilesController, TweetsController],
  providers: [AppService, TwitterService],
})
export class AppModule {}
