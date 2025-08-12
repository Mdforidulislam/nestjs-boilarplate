// create-message.dto.ts
import { IsString, IsArray, IsOptional, IsBoolean } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  roomId: string;

  @IsString()
  senderId: string;

  @IsString()
  receiverId: string;

  @IsString()
  message: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsBoolean()
  @IsOptional()
  isRead?: boolean;
}
