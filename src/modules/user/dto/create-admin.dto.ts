import { Lang, Role, status } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

class CreateAdminDto {
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  location?: string;
}

export class CreateUserAdminDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  contactNo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEnum(Lang)
  @IsOptional()
  lang?: Lang = Lang.ENG;

  @IsEnum(Role)
  @IsOptional()
  role?: Role = Role.ADMIN;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(status)
  @IsOptional()
  status?: status = status.ACTIVE;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAdminDto)
  admin?: CreateAdminDto;
}
