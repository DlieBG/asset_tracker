import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Stock } from "./stock.entity";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: '' })
    description: string;

    @Column()
    amount: number;

    @Column()
    price: number;

    @Column({ default: new Date() })
    time: Date;

    @ManyToOne(type => Stock, stock => stock.orders)
    stock: Stock;

    @ManyToOne(type => Account, account => account.orders)
    account: Account;

}
