import { PrismaService } from '@/helper/prisma.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Role, User } from '@prisma/client';
import { ApiError } from 'src/utils/api_error';
import { BcryptService } from 'src/utils/bcrypt.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import QueryBuilderIsrafil from '@/utils/queryBuilderIsrafil';

import {
  userFilterFields,
  userInclude,
  userNestedFilters,
  userRangeFilter,
  userSearchFields,
} from './user.constant';

import { CreateUserAdminDto } from './dto/create-admin.dto';


@Injectable()
export class UserService {
  
  constructor(
    private prisma: PrismaService,
    private bcryptService: BcryptService,
    private readonly configService: ConfigService,
  ) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAdmin(data: CreateUserAdminDto): Promise<User | null> {
    const { admin: adminData, ...userData } = data;

    const result = await this.prisma.$transaction(
      async (tx) => {
        userData.role = Role.ADMIN;

        if (!userData.password) {
          userData.password = this.configService.get<string>(
            'DEFAULT_ADMIN_PASSWORD',
          );
        }

        userData.password = await this.bcryptService.hash(userData.password);

        const isEmailExists = await tx.user.findUnique({
          where: { email: userData?.email },
        });

        if (isEmailExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `user email is already exists`,
          );
        }

        const isContactNoExists = await tx.user.findUnique({
          where: { contactNo: userData?.contactNo },
        });

        if (isContactNoExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `contact no is already exists`,
          );
        }

        const userCreation = await tx.user.create({
          data: { ...userData, role: Role.ADMIN },
        });

        const adminCreation = await tx.admin.create({
          data: {
            ...adminData,
            userId: userCreation?.id,
          } as any,
        });

        if (!userCreation || !adminCreation) {
          throw new ApiError(
            HttpStatus.NOT_FOUND,
            'Failed to create admin and user',
          );
        }

        return userCreation;
      },
      {
        maxWait: 5000,
        timeout: 10000,
      },
    );

    return await this.prisma.user.findUnique({
      where: { id: result?.id },
      include: { admin: true },
    });
  }

  async createBrokerFirm(data: any): Promise<User | null> {
    const { brokerFirm: brokerFirmData, ...userData } = data;

    const result = await this.prisma.$transaction(
      async (tx) => {
        userData.role = Role.BROKER_FIRM;

        if (!userData.password) {
          userData.password = this.configService.get<string>(
            'DEFAULT_BROKER_FIRM_PASSWORD',
          );
        }

        userData.password = await this.bcryptService.hash(userData.password);

        const isEmailExists = await tx.user.findUnique({
          where: { email: userData?.email },
        });

        if (isEmailExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `user email is already exists`,
          );
        }

        const isContactNoExists = await tx.user.findUnique({
          where: { contactNo: userData?.contactNo },
        });

        if (isContactNoExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `contact no is already exists`,
          );
        }

        const userCreation = await tx.user.create({
          data: { ...userData },
        });

        const brokerFirmCreation = await tx.brokerFirm.create({
          data: {
            ...brokerFirmData,
            userId: userCreation?.id,
          } as any,
        });

        if (!userCreation || !brokerFirmCreation) {
          throw new ApiError(
            HttpStatus.NOT_FOUND,
            'Failed to create broker firm and user',
          );
        }

        return userCreation;
      },
      {
        maxWait: 5000,
        timeout: 10000,
      },
    );

    return await this.prisma.user.findUnique({
      where: { id: result?.id },
      include: { brokerFirm: true },
    });
  }

  async createBroker(data: any): Promise<User | null> {
    const { broker: brokerData, ...userData } = data;

    const result = await this.prisma.$transaction(
      async (tx) => {
        userData.role = Role.BROKER;

        if (!userData.password) {
          userData.password = this.configService.get<string>(
            'DEFAULT_BROKER_PASSWORD',
          );
        }

        userData.password = await this.bcryptService.hash(userData.password);

        const isEmailExists = await tx.user.findUnique({
          where: { email: userData?.email },
        });

        if (isEmailExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `user email is already exists`,
          );
        }

        const isContactNoExists = await tx.user.findUnique({
          where: { contactNo: userData?.contactNo },
        });

        if (isContactNoExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `contact no is already exists`,
          );
        }

        const userCreation = await tx.user.create({
          data: { ...userData },
        });

        const brokerCreation = await tx.broker.create({
          data: {
            ...brokerData,
            userId: userCreation?.id,
          } as any,
        });

        if (!userCreation || !brokerCreation) {
          throw new ApiError(
            HttpStatus.NOT_FOUND,
            'Failed to create broker firm and user',
          );
        }

        return userCreation;
      },
      {
        maxWait: 5000,
        timeout: 10000,
      },
    );

    return await this.prisma.user.findUnique({
      where: { id: result?.id },
      include: { broker: true },
    });
  }

  async createCustomer(data: CreateCustomerDto): Promise<User | null> {
    const { customer: customerData, ...userData } = data;

    const result = await this.prisma.$transaction(
      async (tx) => {
        userData.role = Role.CUSTOMER;

        if (!userData.password) {
          userData.password = this.configService.get<string>(
            'DEFAULT_CUSTOMER_PASSWORD',
          );
        }

        userData.password = await this.bcryptService.hash(userData.password);

        const isEmailExists = await tx.user.findUnique({
          where: { email: userData?.email },
        });

        if (isEmailExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `user email is already exists`,
          );
        }

        const isContactNoExists = await tx.user.findUnique({
          where: { contactNo: userData?.contactNo },
        });

        if (isContactNoExists) {
          throw new ApiError(
            HttpStatus.CONFLICT,
            `contact no is already exists`,
          );
        }

        const userCreation = await tx.user.create({
          data: { ...userData, role: Role.CUSTOMER },
        });

        const customerCreation = await tx.customer.create({
          data: {
            // ...customerData,
            userId: userCreation?.id,
            ...customerData,
          },
        });

        if (!userCreation || !customerCreation) {
          throw new ApiError(
            HttpStatus.NOT_FOUND,
            'Failed to create customer and user',
          );
        }

        return userCreation;
      },
      {
        maxWait: 5000,
        timeout: 10000,
      },
    );

    return await this.prisma.user.findUnique({
      where: { id: result?.id },
      include: { customer: true },
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getMany(query: Record<string, string>) {
    const queryBuilder = new QueryBuilderIsrafil(query, this.prisma.user);
    const result = await queryBuilder

      .filter(userFilterFields)
      .search(userSearchFields)
      .nestedFilter(userNestedFilters)
      .sort()
      .paginate()
      .include(userInclude)
      .fields()
      .filterByRange(userRangeFilter)
      .execute();

    const meta = await queryBuilder.countTotal();

    return { meta, data: result };
  }

  async getOne(data: { email: string }): Promise<User | any | null> {
    const result = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { username: data.email }],
      },
      include: {
        admin: true,
        customer: true,
      },
    });

    return result;
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  async updatePassword({ id, password }: { id: string; password: string }) {
    return this.prisma.user.update({ where: { id }, data: { password } });
  }
}
