

import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  IsDateString,
  IsBoolean,
  IsEnum,
  IsMongoId
} from 'class-validator';

export class CreateTaskCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  file?: string[];

  @IsString()
  @IsOptional()
  icon?: string;

  @IsMongoId()
  @IsOptional()
  categoryid?: string;

  @IsMongoId()
  @IsOptional()
  subCategoryid?: string;

}