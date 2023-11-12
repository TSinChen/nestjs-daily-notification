import axios from 'axios';
import { ConfigService } from '@nestjs/config';

const createAxiosInstance = (configService: ConfigService) => {
  const apiUrl = configService.get<string>('OPEN_DATA_API_URL');

  return axios.create({
    baseURL: apiUrl,
  });
};

export default createAxiosInstance;
