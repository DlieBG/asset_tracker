import { ApiProperty } from "@nestjs/swagger";

export class CreateDividendDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    amount: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty({ required: false })
    creditAccount: { id: number };

    @ApiProperty({ required: false })
    creditStock: { id: number };

    @ApiProperty()
    stock: { id: number };

}

export class UpdateDividendDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    amount: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty({ required: false })
    creditAccount: { id: number };

    @ApiProperty({ required: false })
    creditStock: { id: number };

    @ApiProperty({ required: false })
    stock: { id: number };

}
