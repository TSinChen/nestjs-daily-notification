import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import createAxiosInstance from 'src/axiosInstances/lineNotifyApi';

@Injectable()
export class LineNotifyService {
  private readonly lineNotifyApi;

  constructor(private readonly configService: ConfigService) {
    this.lineNotifyApi = createAxiosInstance(configService);
  }

  async sendMessage(message: string): Promise<void> {
    await this.lineNotifyApi.post(`/api/notify?message=${message}`);
  }
}
