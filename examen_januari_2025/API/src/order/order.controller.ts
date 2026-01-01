import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Order } from 'src/types';

@Controller('orders')
export class OrderController {
  constructor(private orderService: DatabaseService) {}

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return (await this.orderService.getOrders()).find(
      (order) => order.id === parseInt(id),
    );
  }

  @Post()
  async createOrder(@Body() newOrder: Order) {
    let result = await this.orderService.createOrder(newOrder);

    if (result) {
      return result;
    }
  }
}
