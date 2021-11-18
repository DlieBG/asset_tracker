import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactDto, UpdateContactDto } from 'src/finance/dtos/contact.dto';
import { Contact } from 'src/finance/entities/contact.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ContactService {

    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ) { }

    async getContacts(): Promise<Contact[]> {
        return this.contactRepository.find();
    }

    async getContact(id: number): Promise<Contact> {
        return this.contactRepository.findOne(id, { relations: ['bank'] });
    }

    async createContact(contact: CreateContactDto): Promise<Contact> {
        return this.contactRepository.save(contact);
    }

    async updateContact(contact: UpdateContactDto): Promise<Contact> {
        return this.contactRepository.save(contact);
    }

    async deleteContact(id: number): Promise<DeleteResult> {
        return this.contactRepository.delete(id);
    }

}
