import { ApiProperty } from "@nestjs/swagger";

export class CreateBankDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    url: string;

    @ApiProperty({ required: false })
    address: string;

}

export class UpdateBankDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    url: string;

    @ApiProperty({ required: false })
    address: string;

}
