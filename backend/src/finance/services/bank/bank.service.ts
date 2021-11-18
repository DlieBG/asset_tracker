import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBankDto, UpdateBankDto } from 'src/finance/dtos/bank.dto';
import { Bank } from 'src/finance/entities/bank.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class BankService {

    constructor(
        @InjectRepository(Bank)
        private bankRepository: Repository<Bank>
    ) { }

    async getBanks(): Promise<Bank[]> {
        return this.bankRepository.find();
    }

    async getBank(id: number): Promise<Bank> {
        return this.bankRepository.findOne(id, { relations: ['contacts', 'accounts', 'depots'] });
    }

    async createBank(bank: CreateBankDto): Promise<Bank> {
        return this.bankRepository.save(bank);
    }

    async updateBank(bank: UpdateBankDto): Promise<Bank> {
        return this.bankRepository.save(bank);
    }

    async deleteBank(id: number): Promise<DeleteResult> {
        return this.bankRepository.delete(id);
    }

}
