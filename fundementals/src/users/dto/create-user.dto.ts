import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric } from "class-validator";

export class CreateUserDTO {
    @ApiProperty()
    @IsAlphanumeric()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty({required:false})
    age?:number

}