import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePriceDto, UpdatePriceDto } from 'src/finance/dtos/price.dto';
import { Price } from 'src/finance/entities/price.entity';
import { PriceService } from 'src/finance/services/price/price.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_price')
@Controller('price')
export class PriceController {

    constructor(private priceService: PriceService) { }

    @Get()
    async getPrices(): Promise<Price[]> {
        return this.priceService.getPrices();
    }

    @Get('/:id')
    async getPrice(@Param('id') id: number): Promise<Price> {
        return this.priceService.getPrice(id);
    }

    @Post()
    async createPrice(@Body() price: CreatePriceDto): Promise<Price> {
        return this.priceService.createPrice(price);
    }

    @Put()
    async updatePrice(@Body() price: UpdatePriceDto): Promise<Price> {
        return this.priceService.createPrice(price);
    }

    @Delete('/:id')
    async deletePrice(@Param('id') id: number): Promise<DeleteResult> {
        return this.priceService.deletePrice(id);
    }

}
