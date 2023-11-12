import { LocationName } from './enums';
import { WeatherElement } from './types';

export class OpenDataGetWeatherPayload {
  readonly locationNames: LocationName[];
}

export class OpenDataGetWeatherResponse {
  readonly records: {
    datasetDescription: string;
    location: {
      locationName: string;
      weatherElement: WeatherElement[];
    }[];
  };
}
