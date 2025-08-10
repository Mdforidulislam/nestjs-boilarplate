import { IsMongoId, IsNumber, IsOptional } from "class-validator";

export class CreateTaskApplicationDto {
    
    @IsOptional()
    @IsMongoId()
    taskId?: string

    @IsNumber()
    @IsOptional()
    amount?: number

    @IsOptional()
    @IsMongoId()
    offerId?: string

}



