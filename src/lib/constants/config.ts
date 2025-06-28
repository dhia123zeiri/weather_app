export const APP_CONFIG = {
  name: 'Weather App',
  description: 'Get current weather information for any city worldwide',
  version: '1.0.0',
  author: 'Weather App Team',
  repository: 'https://github.com/username/weather-app',
} as const;

export const STORAGE_KEYS = {
  SEARCH_HISTORY: 'weather-search-history',
  USER_PREFERENCES: 'weather-user-preferences',
} as const;

export const ANIMATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;
