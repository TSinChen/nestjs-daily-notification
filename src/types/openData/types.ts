import { WeatherElementName } from './enums';

export type WeatherElementWx = {
  elementName: WeatherElementName.Wx;
  time: {
    startTime: string;
    endTime: string;
    parameter: {
      parameterName: string;
      parameterValue: string;
    };
  }[];
};

export type WeatherElementPoP = {
  elementName: WeatherElementName.PoP;
  time: {
    startTime: string;
    endTime: string;
    parameter: {
      parameterName: string;
      parameterUnit: string;
    };
  }[];
};

export type WeatherElementMinT = {
  elementName: WeatherElementName.MinT;
  time: {
    startTime: string;
    endTime: string;
    parameter: {
      parameterName: string;
      parameterUnit: string;
    };
  }[];
};

export type WeatherElementCI = {
  elementName: WeatherElementName.CI;
  time: {
    startTime: string;
    endTime: string;
    parameter: {
      parameterName: string;
    };
  }[];
};

export type WeatherElementMaxT = {
  elementName: WeatherElementName.MaxT;
  time: {
    startTime: string;
    endTime: string;
    parameter: {
      parameterName: string;
      parameterUnit: string;
    };
  }[];
};

export type WeatherElement =
  | WeatherElementWx
  | WeatherElementPoP
  | WeatherElementMinT
  | WeatherElementCI
  | WeatherElementMaxT;
