import { Injectable } from '@nestjs/common';
import { CreateRefferingDto } from './dto/create-reffering.dto';
import { UpdateRefferingDto } from './dto/update-reffering.dto';

@Injectable()
export class RefferingService {
  create(createRefferingDto: CreateRefferingDto) {
    return 'This action adds a new reffering';
  }

  findAll() {
    return `This action returns all reffering`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reffering`;
  }

  update(id: number, updateRefferingDto: UpdateRefferingDto) {
    return `This action updates a #${id} reffering`;
  }

  remove(id: number) {
    return `This action removes a #${id} reffering`;
  }
}
