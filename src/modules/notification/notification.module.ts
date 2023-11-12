import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';
import { LineNotifyService } from '../lineNotify/services/lineNotify.service';
import { OpenDataService } from '../openData/services/openData.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService, LineNotifyService, OpenDataService],
})
export class NotificationModule {}
