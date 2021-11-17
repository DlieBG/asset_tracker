import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Stock } from "./stock.entity";

@Entity()
export class Dividend {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column({ default: new Date() })
    time: Date;

    @ManyToOne(type => Account, account => account.dividends)
    account: Account;

    @ManyToOne(type => Stock, stock => stock.dividends)
    stock: Stock;

}
