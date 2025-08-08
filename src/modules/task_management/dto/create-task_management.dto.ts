
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
import { TaskType, TaskStatus } from '@prisma/client';

export class CreateTaskManagementDto {
  @IsString()
  title: string;

  @IsEnum(TaskType)
  @IsOptional()
  taskType?: TaskType;

  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  max_salary?: number;

  @IsNumber()
  @IsOptional()
  min_salary?: number;

  @IsArray()
  @IsString({ each: true })
  require_skills: string[];

  @IsArray()
  @IsString({ each: true })
  attachments: string[];

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  deadline?: Date;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsMongoId()
  traderId: string;

  @IsMongoId()
  categoryid: string;

  @IsMongoId()
  @IsOptional()
  subCategoryid?: string;
}



export class createCategoryDto {
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