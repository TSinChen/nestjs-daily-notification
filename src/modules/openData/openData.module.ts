import { Module } from '@nestjs/common';
import { OpenDataController } from './controllers/openData.controller';
import { OpenDataService } from './services/openData.service';

@Module({
  imports: [],
  controllers: [OpenDataController],
  providers: [OpenDataService],
})
export class OpenDataModule {}
