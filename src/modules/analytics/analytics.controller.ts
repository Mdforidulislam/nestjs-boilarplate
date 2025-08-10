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
import { IsPublic } from '../auth/auth.decorator';
import { ResponseService } from '@/utils/response';


@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @IsPublic()
  @Get(`admin`)
  // @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  async findAll() {
    const result = await this.analyticsService.AdminAnalytics();
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Admin Overview Analyticss found successfully`,
      data: result,
    });
  }

  
  @Get("trader")
  async adminEconomic(
    @Query() query: Record<string, any>,
  ) {
    const result = await this.analyticsService.TraderAnalytics();
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: `Admin Economic Analyticss found successfully`,
      data: result,
    });
  }
}

