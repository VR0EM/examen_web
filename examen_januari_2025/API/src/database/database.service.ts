import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';

// Export interfaces in `types.ts`
import { Order } from '../types';

@Injectable()
export class DatabaseService {
  //   database: Db;

  //   orderCollection: Collection<Order>;
  // Mijn database weigerde constant verbinding, ik heb de gebruikte ccode laten staan.
  // Ik heb de database dan vervangen door een simpele array om uit uit te lezen.
  private orderList: Order[] = [];

  constructor() {
    // let mongoClient = new MongoClient('mongodb://localhost:27017');
    // this.database = mongoClient.db('Orders');
    // this.orderCollection = this.database.collection<Order>('Order');
  }

  async getOrders() {
    // return await this.orderCollection.find({}).toArray();
    return this.orderList;
  }

  async createOrder(newOrder: Order) {
    let maxId = 0;
    let orders = await this.getOrders();
    for (let order of orders) {
      if (order.id > maxId) {
        maxId = order.id;
      }
    }

    newOrder.id = maxId + 1;
    newOrder.timestamp = new Date().toISOString();
    newOrder.status = 'ORDER_RECEIVED';
    // return await this.orderCollection.insertOne(newOrder);
    this.orderList.push(newOrder);
    return newOrder;
  }
}
