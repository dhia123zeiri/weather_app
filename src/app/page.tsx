'use client';

import React from 'react';
import { useWeather } from '../lib/hooks/useWeather';
import { useWeatherStore } from '../lib/stores/weatherStore';
import { SearchForm } from '../components/weather/SearchForm';
import { WeatherCard } from '../components/weather/WeatherCard';
import { LoadingSpinner } from '../components/layout/LoadingSpinner';
import { ErrorMessage } from '../components/layout/ErrorMessage';
import { WelcomeMessage } from '../components/layout/WelcomeMessage';

export default function HomePage() {
  const { selectedCity, setSelectedCity } = useWeatherStore();
  const { data, isLoading, error, refetch } = useWeather(selectedCity);

  const handleSearch = (city: string) => {
    setSelectedCity(city);
  };

  const handleRetry = () => {
    refetch();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🌤️ Weather App
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get current weather information for any city worldwide with accurate 
            temperature, humidity, and wind data.
          </p>
        </header>

        {/* Search Section */}
        <div className="mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>

        {/* Content Section */}
        <div className="flex justify-center items-center min-h-[300px]">
          {isLoading && <LoadingSpinner />}
          
          {error && !isLoading && (
            <ErrorMessage 
              message={error.message} 
              onRetry={handleRetry}
            />
          )}
          
          {data && !isLoading && !error && (
            <WeatherCard data={data} />
          )}
          
          {!selectedCity && !isLoading && !error && (
            <WelcomeMessage />
          )}
        </div>
      </div>
    </main>
  );
}
