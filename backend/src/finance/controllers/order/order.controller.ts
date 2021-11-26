import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, UpdateOrderDto } from 'src/finance/dtos/order.dto';
import { Order } from 'src/finance/entities/order.entity';
import { OrderService } from 'src/finance/services/order/order.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_order')
@Controller('order')
export class OrderController {

    constructor(private orderServive: OrderService) { }

    @Get()
    async getOrders(): Promise<Order[]> {
        return this.orderServive.getOrders();
    }

    @Get('/:id')
    async getOrder(@Param('id') id: number): Promise<Order> {
        return this.orderServive.getOrder(id);
    }

    @Post()
    async createOrder(@Body() order: CreateOrderDto): Promise<Order> {
        return this.orderServive.createOrder(order);
    }

    @Put()
    async updateOrder(@Body() order: UpdateOrderDto): Promise<Order> {
        return this.orderServive.createOrder(order);
    }

    @Delete('/:id')
    async deleteOrder(@Param('id') id: number): Promise<DeleteResult> {
        return this.orderServive.deleteOrder(id);
    }

}
