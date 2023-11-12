import { OpenDataGetWeatherResponse } from '@/types/openData/dtos';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import createAxiosInstance from 'src/axiosInstances/lineNotifyApi';

@Injectable()
export class LineNotifyService {
  private readonly lineNotifyApi: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    this.lineNotifyApi = createAxiosInstance(configService);
  }

  async sendMessage(message: string): Promise<OpenDataGetWeatherResponse> {
    return await this.lineNotifyApi.post(`/notify?message=${message}`);
  }
}
