import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEntryDto, UpdateEntryDto } from 'src/finance/dtos/entry.dto';
import { Entry } from 'src/finance/entities/entry.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EntryService {

    constructor(
        @InjectRepository(Entry)
        private entryRepository: Repository<Entry>
    ) { }

    async getEntries(): Promise<Entry[]> {
        return this.entryRepository.find();
    }

    async getEntry(id: number): Promise<Entry> {
        return this.entryRepository.findOne(id, { relations: ['account'] });
    }

    async createEntry(entry: CreateEntryDto): Promise<Entry> {
        return this.entryRepository.save(entry);
    }

    async updateEntry(entry: UpdateEntryDto): Promise<Entry> {
        return this.entryRepository.save(entry);
    }

    async deleteEntry(id: number): Promise<DeleteResult> {
        return this.entryRepository.delete(id);
    }

}
