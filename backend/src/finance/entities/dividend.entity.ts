import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Stock } from "./stock.entity";

@Entity()
export class Dividend {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: '' })
    description: string;

    @Column()
    amount: number;

    @Column({ default: new Date() })
    time: Date;

    @ManyToOne(type => Account, account => account.dividends)
    creditAccount: Account;

    @ManyToOne(type => Stock, stock => stock.creditDividends)
    creditStock: Stock;

    @ManyToOne(type => Stock, stock => stock.dividends)
    stock: Stock;

}
