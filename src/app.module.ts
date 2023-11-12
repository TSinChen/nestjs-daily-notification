import { Module } from '@nestjs/common';
import { LineNotifyModule } from './modules/lineNotify/lineNotify.module';
import { AppConfigModule } from './config/config.module';
import { OpenDataModule } from './modules/openData/openData.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    AppConfigModule,
    LineNotifyModule,
    OpenDataModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
