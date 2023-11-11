import { Module } from '@nestjs/common';
import { LineNotifyController } from './controllers/lineNotify.controller';
import { LineNotifyService } from './services/lineNotify.service';

@Module({
  imports: [],
  controllers: [LineNotifyController],
  providers: [LineNotifyService],
})
export class LineNotifyModule {}
