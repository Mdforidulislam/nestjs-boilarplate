import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilder from '@/utils/queryBuilder';

@Injectable()
export class TaskCategoryService {

  constructor(
    private prisma: PrismaService,
    private prismaHelper: PrismaHelperService
  ) {}

 async create(createTaskCategoryDto: CreateTaskCategoryDto) {
     return await this.prisma.category.create({
      data: {
        ...createTaskCategoryDto,
      }
    });
  }


async findAllCategory(query: Record<string, any>) {
    const queryBuilder = new QueryBuilder(query, this.prisma.category);
    const result = await queryBuilder
      .filter([])
      .search([])
      .nestedFilter([])
      .sort()
      .paginate()
      .include({}) 
      .fields()
      .filterByRange([])
      .execute();

    const meta = await queryBuilder.countTotal();

    return { meta, data: result };

}

  findAll() {
    return `This action returns all taskCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskCategory`;
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return `This action updates a #${id} taskCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskCategory`;
  }
}
