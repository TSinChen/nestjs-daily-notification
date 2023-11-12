import { Module } from '@nestjs/common';
import { LineNotifyModule } from './modules/lineNotify/lineNotify.module';
import { AppConfigModule } from './config/config.module';
import { OpenDataModule } from './modules/openData/openData.module';

@Module({
  imports: [
    AppConfigModule,
    LineNotifyModule,
    OpenDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
