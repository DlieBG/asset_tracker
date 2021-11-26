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
import { EntryService } from './services/entry/entry.service';
import { EntryController } from './controllers/entry/entry.controller';
import { DepotService } from './services/depot/depot.service';
import { DepotController } from './controllers/depot/depot.controller';
import { StockService } from './services/stock/stock.service';
import { StockController } from './controllers/stock/stock.controller';
import { StockBalanceView } from './entities/stock-balance.view';
import { OrderService } from './services/order/order.service';
import { OrderController } from './controllers/order/order.controller';
import { DividendService } from './services/dividend/dividend.service';
import { DividendController } from './controllers/dividend/dividend.controller';
import { PriceController } from './controllers/price/price.controller';
import { PriceService } from './services/price/price.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bank, Contact, Account, Entry, Depot, Stock, Order, Dividend, Price, AccountBalanceView, StockBalanceView])
    ],
    providers: [AccountService, BankService, ContactService, EntryService, DepotService, StockService, OrderService, DividendService, PriceService],
    controllers: [AccountController, BankController, ContactController, EntryController, DepotController, StockController, OrderController, DividendController, PriceController],
})
export class FinanceModule {}
