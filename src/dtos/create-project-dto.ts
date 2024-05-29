import { IsString, MaxLength, MinLength } from "class-validator";

export default class CreateProjectDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @MinLength(1)
    description: string;
}