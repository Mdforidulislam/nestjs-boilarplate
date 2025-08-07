import { Module } from '@nestjs/common';
import { RefferingService } from './reffering.service';
import { RefferingController } from './reffering.controller';

@Module({
  controllers: [RefferingController],
  providers: [RefferingService],
})
export class RefferingModule {}
