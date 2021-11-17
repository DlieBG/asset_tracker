import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";

@Entity()
export class Entry {

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

    @ManyToOne(type => Account, account => account.entries)
    account: Account;

}
