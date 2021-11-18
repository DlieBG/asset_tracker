import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty({ required: false })
    position: string;

    @ApiProperty({ required: false })
    address: string;

    @ApiProperty({ required: false })
    email: string;

    @ApiProperty({ required: false })
    phone: string;

    @ApiProperty({ required: false })
    comment: string;

    @ApiProperty()
    bank: { id: number };

}

export class UpdateContactDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    lastName: string;

    @ApiProperty({ required: false })
    position: string;

    @ApiProperty({ required: false })
    address: string;

    @ApiProperty({ required: false })
    email: string;

    @ApiProperty({ required: false })
    phone: string;

    @ApiProperty({ required: false })
    comment: string;

    @ApiProperty({ required: false })
    bank: { id: number };

}
