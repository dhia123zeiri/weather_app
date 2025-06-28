import { useQuery } from '@tanstack/react-query';
import { WeatherData } from '../../types/weather';
import { fetchWeatherData } from '../api/weather';
import { QUERY_KEYS, CACHE_DURATION } from '../constants/api';
import { useWeatherStore } from '../stores/weatherStore';
import { useEffect } from 'react';

export const useWeather = (city: string) => {
  const { setIsLoading } = useWeatherStore();

  const query = useQuery({
    queryKey: [QUERY_KEYS.WEATHER, city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city.trim(),
    staleTime: CACHE_DURATION.WEATHER,
    retry: (failureCount, error) => {
      // Don't retry on client errors (400-499)
      if (error instanceof Error && error.message.includes('not found')) {
        return false;
      }
      return failureCount < 2;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  useEffect(() => {
    setIsLoading(query.isLoading);
  }, [query.isLoading, setIsLoading]);

  return query;
};