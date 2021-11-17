import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    bankId: number;

}

export class UpdateAccountDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    bankId: number;

}
