import { Injectable } from '@nestjs/common';
import { FileService } from '@/helper/file.service';
import { startOfDay, subDays } from 'date-fns';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import { startOfMonth, subMonths, endOfMonth, eachDayOfInterval, format } from 'date-fns';

@Injectable()
export class AnalyticsService {
  constructor(
    private prisma: PrismaService,
    private prismaHelper: PrismaHelperService,
    private fileService: FileService,
  ) {}

  AdminAnalytics() {

    return true;
  }

  TraderAnalytics() {
    return true;
  }

}



