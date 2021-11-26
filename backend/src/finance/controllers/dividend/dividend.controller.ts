import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDividendDto, UpdateDividendDto } from 'src/finance/dtos/dividend.dto';
import { Dividend } from 'src/finance/entities/dividend.entity';
import { DividendService } from 'src/finance/services/dividend/dividend.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_dividend')
@Controller('dividend')
export class DividendController {

    constructor(private dividendService: DividendService) { }

    @Get()
    async getDividends(): Promise<Dividend[]> {
        return this.dividendService.getDividends();
    }

    @Get('/:id')
    async getDividend(@Param('id') id: number): Promise<Dividend> {
        return this.dividendService.getDividend(id);
    }

    @Post()
    async createDividend(@Body() dividend: CreateDividendDto): Promise<Dividend> {
        return this.dividendService.createDividend(dividend);
    }

    @Put()
    async updateDividend(@Body() dividend: UpdateDividendDto): Promise<Dividend> {
        return this.dividendService.createDividend(dividend);
    }

    @Delete('/:id')
    async deleteDividend(@Param('id') id: number): Promise<DeleteResult> {
        return this.dividendService.deleteDividend(id);
    }

}
