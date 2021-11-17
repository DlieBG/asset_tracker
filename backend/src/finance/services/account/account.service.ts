import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto, UpdateAccountDto } from 'src/finance/dtos/account.dto';
import { AccountBalanceView } from 'src/finance/entities/account-balance.view';
import { Account } from 'src/finance/entities/account.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        @InjectRepository(AccountBalanceView)
        private accountViewRepository: Repository<AccountBalanceView>
    ) { }

    async getAccounts(): Promise<AccountBalanceView[]> {
        return this.accountViewRepository.find();
    }

    async getAccount(id: number): Promise<AccountBalanceView> {
        return this.accountViewRepository.findOne(id, { relations: ['bank', 'entries', 'orders', 'dividends'] });
    }

    async createAccount(account: CreateAccountDto): Promise<Account> {
        return this.accountRepository.save(account);
    }

    async updateAccount(account: UpdateAccountDto): Promise<Account> {
        return this.accountRepository.save(account);
    }

}
