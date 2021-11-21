import { ApiProperty } from '@nestjs/swagger';

export class CreateEntryDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    amount: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty()
    account: { id: number };

}

export class UpdateEntryDto {

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
    account: { id: number };

}
