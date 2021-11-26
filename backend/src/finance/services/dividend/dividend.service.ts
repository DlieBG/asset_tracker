import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDividendDto, UpdateDividendDto } from 'src/finance/dtos/dividend.dto';
import { Dividend } from 'src/finance/entities/dividend.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class DividendService {

    constructor(
        @InjectRepository(Dividend)
        private dividendRepository: Repository<Dividend>
    ) { }

    async getDividends(): Promise<Dividend[]> {
        return this.dividendRepository.find();
    }

    async getDividend(id: number): Promise<Dividend> {
        return this.dividendRepository.findOne(id, { relations: ['creditAccount', 'creditStock', 'stock'] });
    }

    async createDividend(dividend: CreateDividendDto): Promise<Dividend> {
        return this.dividendRepository.save(dividend);
    }

    async updateDividend(dividend: UpdateDividendDto): Promise<Dividend> {
        return this.dividendRepository.save(dividend);
    }

    async deleteDividend(id: number): Promise<DeleteResult> {
        return this.dividendRepository.delete(id);
    }

}
