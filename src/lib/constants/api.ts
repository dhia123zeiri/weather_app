export const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: 'fe824cb856a37281c8c13e7a5fbbd488',
  DEFAULT_UNITS: 'metric',
  ICON_BASE_URL: 'https://openweathermap.org/img/wn',
} as const;

export const QUERY_KEYS = {
  WEATHER: 'weather',
} as const;

export const CACHE_DURATION = {
  WEATHER: 5 * 60 * 1000, // 5 minutes
} as const;
