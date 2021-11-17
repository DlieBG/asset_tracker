import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Bank } from './entities/bank.entity';
import { Contact } from './entities/contact.entity';
import { Depot } from './entities/depot.entity';
import { Dividend } from './entities/dividend.entity';
import { Entry } from './entities/entry.entity';
import { Order } from './entities/order.entity';
import { Price } from './entities/price.entity';
import { Stock } from './entities/stock.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bank, Contact, Account, Entry, Depot, Stock, Order, Dividend, Price])
    ],
})
export class FinanceModule {}
