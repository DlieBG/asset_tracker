import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepotDto, UpdateDepotDto } from 'src/finance/dtos/depot.dto';
import { Depot } from 'src/finance/entities/depot.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class DepotService {

    constructor(
        @InjectRepository(Depot)
        private depotRepository: Repository<Depot>
    ) { }

    async getDepots(): Promise<Depot[]> {
        return this.depotRepository.find();
    }

    async getDepot(id: number): Promise<Depot> {
        return this.depotRepository.findOne(id, { relations: ['bank', 'standardAccount', 'stocks'] });
    }

    async createDepot(depot: CreateDepotDto): Promise<Depot> {
        return this.depotRepository.save(depot);
    }

    async updateDepot(depot: UpdateDepotDto): Promise<Depot> {
        return this.depotRepository.save(depot);
    }

    async deleteDepot(id: number): Promise<DeleteResult> {
        return this.depotRepository.delete(id);
    }

}
