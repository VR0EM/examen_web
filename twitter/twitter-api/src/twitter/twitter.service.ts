import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';
import { Profile, Tweet } from 'src/types';
import * as twitterJSON from '../../src/twitter.json';

@Injectable()
export class TwitterService {
  database: Db;
  tweetCollection: Collection<Tweet>;
  profileCollection: Collection<Profile>;

  constructor() {
    let mongoClient = new MongoClient('mongodb://localhost:27017');
    this.database = mongoClient.db('Twitter2');
    this.tweetCollection = this.database.collection<Tweet>('Tweets');
    this.profileCollection = this.database.collection<Profile>('Profiles');
    this.seedDatabase();
  }

  async seedDatabase() {
    let dbTweets = await this.tweetCollection.find({}).toArray();

    if (dbTweets.length == 0) {
      await this.tweetCollection.insertMany(twitterJSON.tweets);
    }

    let dbProfiles = await this.profileCollection.find({}).toArray();

    if (dbProfiles.length === 0) {
      await this.profileCollection.insertMany(twitterJSON.profiles);
    }
  }
}
