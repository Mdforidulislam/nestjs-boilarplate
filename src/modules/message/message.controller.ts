import { Controller, Get, Post, Delete, Param, Body, Query, Request, UseInterceptors, UploadedFile, HttpStatus, UploadedFiles } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { ChatRoomService } from './message.service';
import { ResponseService } from '@/utils/response';
import { AddUserToRoomDto, CreateRoomDto } from './dto/create-message.dto';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import { ParseFormDataInterceptor } from '@/helper/form_data_interceptor';
import { CustomFileFieldsInterceptor } from '@/helper/file_interceptor';



@Controller('api/rooms')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Get(':roomId/messages')
  @Roles(Role.ADMIN,Role.TRADER)
  async getMessageHistory(
    @Param('roomId') roomId: string,
    @Query() query: Record<string, any>,
    @Request() req,
  ) {
    const userId = req.user.id;
    const messages = await this.chatRoomService.getMessageHistory(roomId, userId, query);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Messages retrieved successfully',
      data: messages,
    });
  }

  @Post()
  @Roles(Role.ADMIN,Role.TRADER)
  async createRoom(
    @Body() createRoomDto: CreateRoomDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ) {
    const userId = req.user.id;
    const room = await this.chatRoomService.createRoom(createRoomDto, file?.path, userId);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.CREATED,
      message: 'Room created successfully',
      data: room,
    });
  }

  @Post(':roomId/users')
  @Roles(Role.ADMIN,Role.TRADER)
  async addUserToRoom(
    @Param('roomId') roomId: string,
    @Body() addUserDto: AddUserToRoomDto,
    @Request() req,
  ) {
    const addedBy = req.user.id;
    const result = await this.chatRoomService.addUserToRoom(roomId, { ...addUserDto, addedBy });
    return ResponseService.formatResponse({
      statusCode: HttpStatus.CREATED,
      message: 'User added to room successfully',
      data: result,
    });
  }

  @Delete(':roomId')
  async deleteRoom(
    @Param('roomId') roomId: string,
    @Request() req,
  ) {
    const userId = req.user.id;
    await this.chatRoomService.deleteRoom(roomId, userId);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Room deleted successfully',
    });
  }

  @Post(':roomId/files')
   @UseInterceptors(
      CustomFileFieldsInterceptor([
        { name: 'files', maxCount: 10 },
        { name: "icon", maxCount: 1 },
      ]), 
      ParseFormDataInterceptor,  
    )  
    @Roles(Role.ADMIN)
  async uploadFile(
    @Param('roomId') roomId: string,
    @Request() req,
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ) {

  let fileUrls: string[] = [];
  if (files) {
    fileUrls = files.files.map((file) => `https://localhost:6565/tmp/${file.filename}`);
  }
    const uploadedBy = req.user.id;
    const result = await this.chatRoomService.uploadFile(roomId, uploadedBy, fileUrls);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.CREATED,
      message: 'File uploaded successfully',
      data: result,
    });
  }

  @Get(':roomId')
  @Roles(Role.ADMIN,Role.TRADER)
  async getRoomDetails(
    @Param('roomId') roomId: string,
    @Request() req,
  ) {
    const userId = req.user.id;
    const room = await this.chatRoomService.getRoomDetails(roomId, userId);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Room details retrieved successfully',
      data: room,
    });
  }

  @Get('user/:userId')
  @Roles(Role.ADMIN,Role.TRADER)
  async getUserRooms(
    @Param('userId') userId: string,
    @Request() req,
  ) {
    const rooms = await this.chatRoomService.getUserRooms(userId);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'User rooms retrieved successfully',
      data: rooms,
    });
  }
}