import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefferingService } from './reffering.service';
import { CreateRefferingDto } from './dto/create-reffering.dto';
import { UpdateRefferingDto } from './dto/update-reffering.dto';

@Controller('reffering')
export class RefferingController {
  constructor(private readonly refferingService: RefferingService) {}

  @Post()
  create(@Body() createRefferingDto: CreateRefferingDto) {
    return this.refferingService.create(createRefferingDto);
  }

  @Get()
  findAll() {
    return this.refferingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refferingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefferingDto: UpdateRefferingDto) {
    return this.refferingService.update(+id, updateRefferingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refferingService.remove(+id);
  }
}
