import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./stock.entity";

@Entity()
export class Price {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column({ default: new Date() })
    time: Date;

    @ManyToOne(type => Stock, stock => stock.prices)
    stock: Stock;

}
