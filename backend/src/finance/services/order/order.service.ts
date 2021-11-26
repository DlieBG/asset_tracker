import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto, UpdateOrderDto } from 'src/finance/dtos/order.dto';
import { Order } from 'src/finance/entities/order.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ) { }

    async getOrders(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    async getOrder(id: number): Promise<Order> {
        return this.orderRepository.findOne(id, { relations: ['stock', 'account'] });
    }

    async createOrder(order: CreateOrderDto): Promise<Order> {
        return this.orderRepository.save(order);
    }

    async updateOrder(order: UpdateOrderDto): Promise<Order> {
        return this.orderRepository.save(order);
    }

    async deleteOrder(id: number): Promise<DeleteResult> {
        return this.orderRepository.delete(id);
    }

}
