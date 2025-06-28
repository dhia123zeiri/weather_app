import { WEATHER_EMOJIS } from '../constants/ui';
import { API_CONFIG } from '../constants/api';

export const getWeatherEmoji = (main: string): string => {
  return WEATHER_EMOJIS[main] || '🌤️';
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return `${API_CONFIG.ICON_BASE_URL}/${iconCode}@2x.png`;
};

export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};