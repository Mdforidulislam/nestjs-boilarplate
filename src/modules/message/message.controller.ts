import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { ResponseService } from '@/utils/response';  // Adjust path according to your structure

@Controller('message')
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    private readonly responseService: ResponseService, // Inject ResponseService
  ) {}

  // Create a new message
  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    const message = await this.messageService.create(createMessageDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.CREATED, // 201 is the status for successful creation
      message: 'Message Created Successfully',
      data: message,
    });
  }

  // Get all messages
  @Get()
  async findAll(
    @Query() query: Record<string, any>,
  ) {
    const messages = await this.messageService.findAll(query);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Messages fetched successfully',
      data: messages,
    });
  }

  // Get a specific message by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Message fetched successfully',
      data: message,
    });
  }

  // Update a message by ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    const updatedMessage = await this.messageService.update(id, updateMessageDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Message updated successfully',
      data: updatedMessage,
    });
  }

  // Delete a message by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.messageService.remove(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Message deleted successfully',
      data: result,
    });
  }
}
