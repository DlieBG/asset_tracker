import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Depot } from "./depot.entity";
import { Dividend } from "./dividend.entity";
import { Order } from "./order.entity";
import { Price } from "./price.entity";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column({ default: '' })
    description: string;

    @Column()
    unit: string;

    @ManyToOne(type => Depot, depot => depot.stocks)
    depot: Depot;

    @OneToMany(type => Order, order => order.stock)
    orders: Order[];

    @OneToMany(type => Dividend, dividend => dividend.stock)
    dividends: Dividend[];

    @OneToMany(type => Dividend, dividend => dividend.creditStock)
    creditDividends: Dividend[];

    @OneToMany(type => Price, price => price.stock)
    prices: Price[];
    
}
