import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePriceDto, UpdatePriceDto } from 'src/finance/dtos/price.dto';
import { Price } from 'src/finance/entities/price.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PriceService {

    constructor(
        @InjectRepository(Price)
        private priceRepository: Repository<Price>
    ) { }

    async getPrices(): Promise<Price[]> {
        return this.priceRepository.find();
    }

    async getPrice(id: number): Promise<Price> {
        return this.priceRepository.findOne(id, { relations: ['stock'] });
    }

    async createPrice(price: CreatePriceDto): Promise<Price> {
        return this.priceRepository.save(price);
    }

    async updatePrice(price: UpdatePriceDto): Promise<Price> {
        return this.priceRepository.save(price);
    }

    async deletePrice(id: number): Promise<DeleteResult> {
        return this.priceRepository.delete(id);
    }

}
