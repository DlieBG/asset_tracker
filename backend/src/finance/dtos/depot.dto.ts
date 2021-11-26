import { ApiProperty } from "@nestjs/swagger";

export class CreateDepotDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    bank: { id: number };

    @ApiProperty()
    standardAccount: { id: number };

}

export class UpdateDepotDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    bank: { id: number };

    @ApiProperty({ required: false })
    standardAccount: { id: number };

}
