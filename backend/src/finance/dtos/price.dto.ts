import { ApiProperty } from "@nestjs/swagger";

export class CreatePriceDto {

    @ApiProperty()
    price: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty()
    stock: { id: number };

}

export class UpdatePriceDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    price: number;

    @ApiProperty({ required: false })
    time: Date;

    @ApiProperty({ required: false })
    stock: { id: number };
    
}
