import { Module } from '@nestjs/common';
import { LineNotifyModule } from './modules/lineNotify/lineNotify.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppConfigModule, LineNotifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
