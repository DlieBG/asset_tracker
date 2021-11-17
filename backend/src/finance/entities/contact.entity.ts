import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./bank.entity";

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ default: '' })
    position: string;

    @Column({ default: '' })
    email: string;

    @Column({ default: '' })
    phone: string;

    @Column({ default: '' })
    comment: string;

    @ManyToOne(type => Bank, bank => bank.contacts)
    bank: Bank;

}
