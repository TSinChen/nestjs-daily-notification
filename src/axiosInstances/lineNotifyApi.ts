import axios from 'axios';
import { ConfigService } from '@nestjs/config';

const createAxiosInstance = (configService: ConfigService) => {
  const apiUrl = configService.get<string>('LINE_NOTIFY_API_URL');
  const accessToken = configService.get<string>('LINE_NOTIFY_TOKEN');

  return axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default createAxiosInstance;
