// src/components/weather/WeatherCard.tsx
import React from 'react';
import { WeatherData } from '../../types/weather';
import { getWeatherEmoji, formatTemperature, capitalizeFirst } from '../../lib/utils/weather';
import { Card } from '../ui/Card';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <Card variant="glass" className="p-8 max-w-md w-full animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {data.name}
          </h2>
          <p className="text-gray-600">{data.sys.country}</p>
        </div>
        <div className="text-4xl">
          {getWeatherEmoji(data.weather[0].main)}
        </div>
      </div>

      {/* Main Temperature */}
      <div className="text-center mb-8">
        <div className="text-6xl font-light text-blue-600 mb-2">
          {formatTemperature(data.main.temp)}
        </div>
        <div className="text-xl text-gray-700 capitalize">
          {capitalizeFirst(data.weather[0].description)}
        </div>
        <div className="text-sm text-gray-500 mt-1">
          Feels like {formatTemperature(data.main.feels_like)}
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-6">
        <WeatherDetail
          label="Humidity"
          value={`${data.main.humidity}%`}
          icon="💧"
        />
        <WeatherDetail
          label="Wind Speed"
          value={`${data.wind.speed} m/s`}
          icon="💨"
        />
        <WeatherDetail
          label="Min / Max"
          value={`${formatTemperature(data.main.temp_min)} / ${formatTemperature(data.main.temp_max)}`}
          icon="🌡️"
        />
        <WeatherDetail
          label="Pressure"
          value={`${data.main.pressure} hPa`}
          icon="📊"
        />
      </div>
    </Card>
  );
};

interface WeatherDetailProps {
  label: string;
  value: string;
  icon: string;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ label, value, icon }) => (
  <div className="text-center">
    <div className="text-2xl mb-1">{icon}</div>
    <div className="text-sm text-gray-600 mb-1">{label}</div>
    <div className="font-semibold text-gray-900">{value}</div>
  </div>
);
