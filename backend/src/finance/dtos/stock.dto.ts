import { ApiProperty } from "@nestjs/swagger";

export class CreateStockDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    code: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty()
    unit: string;

    @ApiProperty()
    depot: { id: number };

}

export class UpdateStockDto {

    @ApiProperty()
    id: number;

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    code: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    unit: string;

    @ApiProperty({ required: false })
    depot: { id: number };
    
}
