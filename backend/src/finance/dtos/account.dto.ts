import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {

    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    bank: { id: number };

}

export class UpdateAccountDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    bank: { id: number };

}
