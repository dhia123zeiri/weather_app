import { WeatherData, WeatherError } from '../../types/weather';
import { API_CONFIG } from '../constants/api';
import { sanitizeCityName, validateCityName } from '../utils/validation';

class WeatherAPIError extends Error {
  constructor(message: string, public code?: string | number) {
    super(message);
    this.name = 'WeatherAPIError';
  }
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  if (!validateCityName(city)) {
    throw new WeatherAPIError('Please enter a valid city name');
  }

  const sanitizedCity = sanitizeCityName(city);
  const url = new URL(`${API_CONFIG.BASE_URL}/weather`);
  
  url.searchParams.append('q', sanitizedCity);
  url.searchParams.append('appid', API_CONFIG.API_KEY);
  url.searchParams.append('units', API_CONFIG.DEFAULT_UNITS);

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorData: WeatherError = await response.json();
      
      if (response.status === 404) {
        throw new WeatherAPIError('City not found. Please check the spelling and try again.');
      }
      
      if (response.status === 401) {
        throw new WeatherAPIError('API key is invalid.');
      }
      
      throw new WeatherAPIError(
        errorData.message || 'Failed to fetch weather data. Please try again.',
        errorData.cod
      );
    }

    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    if (error instanceof WeatherAPIError) {
      throw error;
    }
    
    if (error instanceof TypeError) {
      throw new WeatherAPIError('Network error. Please check your internet connection.');
    }
    
    throw new WeatherAPIError('An unexpected error occurred. Please try again.');
  }
};
