import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  Req,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Public } from '../auth/auth.decorator';
import { ResponseService } from '@/utils/response';
import { Role } from '@prisma/client';

import { Request } from 'express';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Public()
  @Get(`admin-overview`)
  // @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  async findAll() {
    const result = await this.analyticsService.adminOverview();
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Admin Overview Analyticss found successfully`,
      data: result,
    });
  }

  
  @Get("admin-economic")
  async adminEconomic(
    @Query() query: Record<string, any>,
  ) {
    const result = await this.analyticsService.adminEconomic(query);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Admin Economic Analyticss found successfully`,
      data: result,
    });
  }

  @Get("common-overview")
  async commonOverview(
    @Query() query: Record<string, any>,
    @Req() req: Request
  ) {
    const result = await this.analyticsService.commonOverview(query,req);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Common Overview Analyticss found successfully`,
      data: result,
    });
  }


  @Get("brokerFirm-overview")
  async brokerFirmOverview(
    @Query() query: Record<string, any>,
    @Req() req: Request
  ) {
    const result = await this.analyticsService.brokerFirmOverview(query,req);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Broker Firm Overview Analyticss found successfully`,
      data: result,
    });
  }

}
