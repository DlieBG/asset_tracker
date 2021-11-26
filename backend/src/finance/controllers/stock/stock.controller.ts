import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStockDto, UpdateStockDto } from 'src/finance/dtos/stock.dto';
import { StockBalanceView } from 'src/finance/entities/stock-balance.view';
import { Stock } from 'src/finance/entities/stock.entity';
import { StockService } from 'src/finance/services/stock/stock.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_stock')
@Controller('stock')
export class StockController {

    constructor(private stockService: StockService) { }

    @Get()
    async getStocks(): Promise<StockBalanceView[]> {
        return this.stockService.getStocks();
    }

    @Get('/:id')
    async getStock(@Param('id') id: number): Promise<StockBalanceView> {
        return this.stockService.getStock(id);
    }

    @Post()
    async createStock(@Body() stock: CreateStockDto): Promise<Stock> {
        return this.stockService.createStock(stock);
    }

    @Put()
    async updateStock(@Body() stock: UpdateStockDto): Promise<Stock> {
        return this.stockService.createStock(stock);
    }

    @Delete('/:id')
    async deleteStock(@Param('id') id: number): Promise<DeleteResult> {
        return this.stockService.deleteStock(id);
    }

}
