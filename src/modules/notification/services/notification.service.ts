import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import createAxiosInstance from 'src/axiosInstances/openDataApi';
import { AxiosInstance } from 'axios';

@Injectable()
export class NotificationService {
  private readonly openDataApi: AxiosInstance;
  private readonly authKey: string;

  constructor(private readonly configService: ConfigService) {
    this.openDataApi = createAxiosInstance(configService);
    this.authKey = this.configService.get<string>('OPEN_DATA_AUTH_KEY');
  }

  async sendWeatherNotify(): Promise<void> {
    // const res = await this.openDataApi.get<NotificationGetWeatherResponseDto>(
    //   `/v1/rest/datastore/F-C0032-001?${params}`,
    // );
    // return res.data;
  }
}
