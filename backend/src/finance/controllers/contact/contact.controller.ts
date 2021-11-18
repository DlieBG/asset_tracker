import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateContactDto, UpdateContactDto } from 'src/finance/dtos/contact.dto';
import { Contact } from 'src/finance/entities/contact.entity';
import { ContactService } from 'src/finance/services/contact/contact.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_contact')
@Controller('contact')
export class ContactController {

    constructor(private contactService: ContactService) { }

    @Get()
    async getContacts(): Promise<Contact[]> {
        return this.contactService.getContacts();
    }

    @Get('/:id')
    async getContact(@Param('id') id: number): Promise<Contact> {
        return this.contactService.getContact(id);
    }

    @Post()
    async createContact(@Body() contact: CreateContactDto): Promise<Contact> {
        return this.contactService.createContact(contact);
    }

    @Put()
    async updateContact(@Body() contact: UpdateContactDto): Promise<Contact> {
        return this.contactService.updateContact(contact);
    }

    @Delete('/:id')
    async deleteContact(@Param('id') id: number): Promise<DeleteResult> {
        return this.contactService.deleteContact(id);
    }

}
