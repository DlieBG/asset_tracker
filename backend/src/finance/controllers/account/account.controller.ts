import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountDto, UpdateAccountDto } from 'src/finance/dtos/account.dto';
import { AccountBalanceView } from 'src/finance/entities/account-balance.view';
import { Account } from 'src/finance/entities/account.entity';
import { AccountService } from 'src/finance/services/account/account.service';
import { DeleteResult } from 'typeorm';

@ApiTags('finance_account')
@Controller('account')
export class AccountController {

    constructor(private accountService: AccountService) {}

    @Get()
    async getAccounts(): Promise<AccountBalanceView[]> {
        return this.accountService.getAccounts();
    }

    @Get('/:id')
    async getAccount(@Param('id') id: number): Promise<AccountBalanceView> {
        return this.accountService.getAccount(id);
    }

    @Post()
    async createAccount(@Body() account: CreateAccountDto): Promise<Account> {
        return this.accountService.createAccount(account);
    }

    @Put()
    async updateAccount(@Body() account: UpdateAccountDto): Promise<Account> {
        return this.accountService.updateAccount(account);
    }

    @Delete('/:id')
    async deleteAccount(@Param('id') id: number): Promise<DeleteResult> {
        return this.accountService.deleteAccount(id);
    }

}
