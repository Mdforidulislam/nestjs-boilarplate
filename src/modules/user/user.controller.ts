import { Public } from '@/modules/auth/auth.decorator';
import { ResponseService } from '@/utils/response';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UserService } from './user.service';
import { Request } from 'express';
import { CreateUserAdminDto } from './dto/create-admin.dto';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Public()
  @Post('create-admin')
  createAdmin(@Body() createAdminDto: CreateUserAdminDto) {
    return this.usersService.createAdmin(createAdminDto);
  }

  @Public()
  @Post('create-customer')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.usersService.createCustomer(createCustomerDto);
  }


  @Public()
  @Get('/')
  async getUsers(@Req() req: Request) {
 
    const result = await this.usersService.getMany(
      req?.query as Record<string, string>,
    );

    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'user retrieved successfully',
      data: result.data,
      meta: result.meta
    });
  }
}
