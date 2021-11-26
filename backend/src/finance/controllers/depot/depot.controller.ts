import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDepotDto, UpdateDepotDto } from 'src/finance/dtos/depot.dto';
import { Depot } from 'src/finance/entities/depot.entity';
import { DepotService } from 'src/finance/services/depot/depot.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_depot')
@Controller('depot')
export class DepotController {

    constructor(private depotService: DepotService) { }

    @Get()
    async getDepots(): Promise<Depot[]> {
        return this.depotService.getDepots();
    }

    @Get('/:id')
    async getDepot(@Param('id') id: number): Promise<Depot> {
        return this.depotService.getDepot(id);
    }

    @Post()
    async createDepot(@Body() depot: CreateDepotDto): Promise<Depot> {
        return this.depotService.createDepot(depot);
    }

    @Put()
    async updateDepot(@Body() depot: UpdateDepotDto): Promise<Depot> {
        return this.depotService.updateDepot(depot);
    }

    @Delete('/:id')
    async deleteDepot(@Param('id') id: number): Promise<DeleteResult> {
        return this.depotService.deleteDepot(id);
    }

}
