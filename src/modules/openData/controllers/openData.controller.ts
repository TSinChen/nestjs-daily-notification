import { Controller, Body, Post } from '@nestjs/common';
import { OpenDataService } from '../services/openData.service';
import {
  OpenDataGetWeatherPayload,
  OpenDataGetWeatherResponse,
} from '@/types/openData/dtos';

@Controller('openData')
export class OpenDataController {
  constructor(private readonly openDataService: OpenDataService) {}

  @Post('/getWeather')
  async getWeather(
    @Body() body: OpenDataGetWeatherPayload,
  ): Promise<OpenDataGetWeatherResponse> {
    return await this.openDataService.getWeather(body);
  }
}
