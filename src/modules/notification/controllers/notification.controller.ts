import { Body, Controller, Post } from '@nestjs/common';
import { LineNotifyService } from '@/modules/lineNotify/services/lineNotify.service';
import { OpenDataService } from '@/modules/openData/services/openData.service';
import { OpenDataGetWeatherPayload } from '@/types/openData/dtos';
import { chain, sortBy, uniqBy } from 'lodash';
import { WeatherElementName } from '@/types/openData/enums';
import {
  WeatherElementMaxT,
  WeatherElementMinT,
  WeatherElementPoP,
  WeatherElementWx,
} from '@/types/openData/types';
import { filterToday } from '@/utils/functions';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly lineNotifyService: LineNotifyService,
    private readonly openDataService: OpenDataService,
  ) {}

  @Post('/weather')
  async sendWeatherNotify(
    @Body() body: OpenDataGetWeatherPayload,
  ): Promise<void> {
    const { records } = await this.openDataService.getWeather(body);
    const message = records.location
      .map(({ locationName, weatherElement }) => {
        const maxTemps = weatherElement.find(
          ({ elementName }) => elementName === WeatherElementName.MaxT,
        ) as WeatherElementMaxT;
        const minTemps = weatherElement.find(
          ({ elementName }) => elementName === WeatherElementName.MinT,
        ) as WeatherElementMinT;
        const wx = weatherElement.find(
          ({ elementName }) => elementName === WeatherElementName.Wx,
        ) as WeatherElementWx;
        const pop = weatherElement.find(
          ({ elementName }) => elementName === WeatherElementName.PoP,
        ) as WeatherElementPoP;

        const highestTemp = sortBy(
          filterToday(maxTemps.time),
          'parameter.parameterName',
        ).at(-1).parameter.parameterName;
        const lowestTemps = sortBy(
          filterToday(minTemps.time),
          'parameter.parameterName',
        ).at(-1).parameter.parameterName;
        const uniqWx = uniqBy(
          filterToday(wx.time),
          'parameter.parameterName',
        )[0].parameter.parameterName;
        const sortedPoPs = chain(filterToday(pop.time))
          .sortBy('parameter.parameterName')
          .map(({ parameter }) => parameter.parameterName)
          .uniq()
          .value();

        const message = `%0A${locationName} - ${uniqWx}%0A${lowestTemps}°C/${highestTemp}°C、降雨機率 ${sortedPoPs
          .map((pop) => `${pop}%25`)
          .join(' - ')}`;
        return message;
      })
      .join();
    this.lineNotifyService.sendMessage(message);
  }
}
