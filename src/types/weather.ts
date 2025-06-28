export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg?: number;
  };
  visibility?: number;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface WeatherError {
  message: string;
  cod?: string | number;
}

export interface SearchHistoryItem {
  city: string;
  timestamp: number;
}
