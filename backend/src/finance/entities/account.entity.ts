import { O_DIRECTORY } from "constants";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./bank.entity";
import { Depot } from "./depot.entity";
import { Dividend } from "./dividend.entity";
import { Entry } from "./entry.entity";
import { Order } from "./order.entity";

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: '' })
    description: string;
    
    @ManyToOne(type => Bank, bank => bank.accounts)
    bank: Bank;

    @OneToMany(type => Entry, entry => entry.account)
    entries: Entry[];

    @OneToMany(type => Depot, depot => depot.standardAccount)
    standardDepots: Depot[];

    @OneToMany(type => Order, order => order.account)
    orders: Order[];

    @OneToMany(type => Dividend, dividend => dividend.account)
    dividends: Dividend[];

}
