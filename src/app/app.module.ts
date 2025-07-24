import { PrismaService } from '@/helper/prisma.service';
import { AuthGuard } from '@/modules/auth/auth.guard';
import { AuthModule } from '@/modules/auth/auth.module';
import { UserModule } from '@/modules/user/user.module';
import { BcryptService } from '@/utils/bcrypt.service';
import { GlobalExceptionFilter } from '@/utils/global_exception';
import { WebsocketGateway } from '@/ws/socket.io.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import config from '../config';
import { AppController } from './app.controller';
import { AdminModule } from '@/modules/admin/admin.module';
import { CustomerModule } from '@/modules/customer/customer.module';
import { FileService } from '@/helper/file.service';
import { PrismaHelperService } from '@/utils/is_existance';
import { UserService } from '@/modules/user/user.service';
import { AnalyticsModule } from '@/modules/analytics/analytics.module';
import { WebhookModule } from '@/payment/Stripe/webhook/webhook.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'short',
          ttl: 1000,
          limit: 100,
        },
        {
          name: 'medium',
          ttl: 10000,
          limit: 1000,
        },
        {
          name: 'long',
          ttl: 600000,
          limit: 1000,
        },
      ],
    }),
    AuthModule,
    UserModule,
    AdminModule,
    CustomerModule,
    AnalyticsModule,
    WebhookModule
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    UserService,
    BcryptService,
    FileService,
    PrismaHelperService,

    // WebSocketService,
    WebsocketGateway,
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: AuthGuard }
  ]
})
export class AppModule {}
