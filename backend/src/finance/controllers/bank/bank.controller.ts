import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBankDto, UpdateBankDto } from 'src/finance/dtos/bank.dto';
import { Bank } from 'src/finance/entities/bank.entity';
import { BankService } from 'src/finance/services/bank/bank.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_bank')
@Controller('bank')
export class BankController {

    constructor(private bankService: BankService) { }

    @Get()
    async getBanks(): Promise<Bank[]> {
        return this.bankService.getBanks();
    }

    @Get('/:id')
    async getBank(@Param('id') id: number): Promise<Bank> {
        return this.bankService.getBank(id);
    }

    @Post()
    async createBank(@Body() bank: CreateBankDto): Promise<Bank> {
        return this.bankService.createBank(bank);
    }

    @Put()
    async updateBank(@Body() bank: UpdateBankDto): Promise<Bank> {
        return this.bankService.updateBank(bank);
    }

    @Delete('/:id')
    async deleteBank(@Param('id') id: number): Promise<DeleteResult> {
        return this.bankService.deleteBank(id);
    }

}
