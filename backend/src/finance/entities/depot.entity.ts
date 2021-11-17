import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Bank } from "./bank.entity";
import { Stock } from "./stock.entity";

@Entity()
export class Depot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: '' })
    description: string;

    @ManyToOne(type => Bank, bank => bank.depots)
    bank: Bank;
    
    @ManyToOne(type => Account, account => account.standardDepots)
    standardAccount: Account;

    @OneToMany(type => Stock, stock => stock.depot)
    stocks: Stock[];
    
}
