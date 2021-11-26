import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    price: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty()
    stock: { id: number};

    @ApiProperty()
    account: { id: number };

}

export class UpdateOrderDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    amount: number;

    @ApiProperty({ required: false })
    price: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty({ required: false })
    stock: { id: number};

    @ApiProperty({ required: false })
    account: { id: number };

}
