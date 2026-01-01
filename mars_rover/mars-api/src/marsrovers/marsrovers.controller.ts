import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';
import { Information } from 'src/types';

@Controller('api/marsrovers')
export class MarsroversController {
  database: Db;
  infoCollection: Collection<Information>;

  constructor() {
    let mongoClient = new MongoClient('mongodb://localhost:27017');
    this.database = mongoClient.db('MarsRoverDB');
    this.infoCollection = this.database.collection<Information>('Information');
  }

  @Get()
  async getAll() {
    let entries = await this.infoCollection.find().toArray();
    return entries;
  }

  @Post()
  async createEntry(@Body() info: Information) {
    let result = await this.infoCollection.insertOne(info);

    if (result.acknowledged) {
      return result.insertedId;
    }
  }
}
