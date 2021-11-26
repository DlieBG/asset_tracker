import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockDto, UpdateStockDto } from 'src/finance/dtos/stock.dto';
import { StockBalanceView } from 'src/finance/entities/stock-balance.view';
import { Stock } from 'src/finance/entities/stock.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class StockService {

    constructor(
        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>,
        @InjectRepository(StockBalanceView)
        private stockBalanceViewRepository: Repository<StockBalanceView>
    ) { }
    
    async getStocks(): Promise<StockBalanceView[]> {
        return this.stockBalanceViewRepository.find();
    }

    async getStock(id: number): Promise<StockBalanceView> {
        return this.stockBalanceViewRepository.findOne(id, { relations: ['depot', 'orders', 'dividends', 'creditDividends', 'prices'] });
    }

    async createStock(stock: CreateStockDto): Promise<Stock> {
        return this.stockRepository.save(stock);
    }

    async updateStock(stock: UpdateStockDto): Promise<Stock> {
        return this.stockRepository.save(stock);
    }

    async deleteStock(id: number): Promise<DeleteResult> {
        return this.stockRepository.delete(id);
    }

}
