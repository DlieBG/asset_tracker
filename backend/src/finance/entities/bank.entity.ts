import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Contact } from "./contact.entity";
import { Depot } from "./depot.entity";

@Entity()
export class Bank {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: '' })
    description: string;

    @Column({ default: '' })
    url: string;

    @Column({ default: '' })
    address: string;

    @OneToMany(type => Contact, contact => contact.bank)
    contacts: Contact[];

    @OneToMany(type => Account, account => account.bank)
    accounts: Account[];

    @OneToMany(type => Depot, depot => depot.bank)
    depots: Depot[];

}
