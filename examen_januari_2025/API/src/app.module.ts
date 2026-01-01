import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [],
  controllers: [AppController, OrderController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
