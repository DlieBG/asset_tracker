import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountBalanceView } from './entities/account-balance.view';
import { Account } from './entities/account.entity';
import { Bank } from './entities/bank.entity';
import { Contact } from './entities/contact.entity';
import { Depot } from './entities/depot.entity';
import { Dividend } from './entities/dividend.entity';
import { Entry } from './entities/entry.entity';
import { Order } from './entities/order.entity';
import { Price } from './entities/price.entity';
import { Stock } from './entities/stock.entity';
import { AccountService } from './services/account/account.service';
import { AccountController } from './controllers/account/account.controller';
import { BankService } from './services/bank/bank.service';
import { BankController } from './controllers/bank/bank.controller';
import { ContactService } from './services/contact/contact.service';
import { ContactController } from './controllers/contact/contact.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bank, Contact, Account, Entry, Depot, Stock, Order, Dividend, Price, AccountBalanceView])
    ],
    providers: [AccountService, BankService, ContactService],
    controllers: [AccountController, BankController, ContactController],
})
export class FinanceModule {}
