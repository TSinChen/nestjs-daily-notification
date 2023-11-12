import * as dayjs from 'dayjs';
import { WeatherElement } from '@/types/openData/types';

export const filterToday = (time: WeatherElement['time']) => {
  const today = dayjs();
  return time.filter(({ startTime }) => dayjs(startTime).isSame(today, 'date'));
};
