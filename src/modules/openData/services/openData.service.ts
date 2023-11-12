import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import createAxiosInstance from 'src/axiosInstances/openDataApi';
import { stringify } from 'query-string';
import {
  OpenDataGetWeatherPayload,
  OpenDataGetWeatherResponse,
} from '@/types/openData/dtos';
import { AxiosInstance } from 'axios';

@Injectable()
export class OpenDataService {
  private readonly openDataApi: AxiosInstance;
  private readonly authKey: string;

  constructor(private readonly configService: ConfigService) {
    this.openDataApi = createAxiosInstance(configService);
    this.authKey = this.configService.get<string>('OPEN_DATA_AUTH_KEY');
  }

  async getWeather(
    body: OpenDataGetWeatherPayload,
  ): Promise<OpenDataGetWeatherResponse> {
    const params = stringify({
      Authorization: this.authKey,
      format: 'JSON',
      locationName: body.locationNames,
    });
    const res = await this.openDataApi.get<OpenDataGetWeatherResponse>(
      `/v1/rest/datastore/F-C0032-001?${params}`,
    );
    return res.data;
  }
}
