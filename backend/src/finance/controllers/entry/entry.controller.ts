import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEntryDto, UpdateEntryDto } from 'src/finance/dtos/entry.dto';
import { Entry } from 'src/finance/entities/entry.entity';
import { EntryService } from 'src/finance/services/entry/entry.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_entry')
@Controller('entry')
export class EntryController {

    constructor(private entryService: EntryService) { }

    @Get()
    async getEntries(): Promise<Entry[]> {
        return this.entryService.getEntries();
    }

    @Get('/:id')
    async getEntry(@Param('id') id: number): Promise<Entry> {
        return this.entryService.getEntry(id);
    }

    @Post()
    async createEntry(@Body() entry: CreateEntryDto): Promise<Entry> {
        return this.entryService.createEntry(entry);
    }

    @Put()
    async updateEntry(@Body() entry: UpdateEntryDto): Promise<Entry> {
        return this.entryService.updateEntry(entry);
    }

    @Delete('/:id')
    async deleteEntry(@Param('id') id: number): Promise<DeleteResult> {
        return this.entryService.deleteEntry(id);
    }

}
