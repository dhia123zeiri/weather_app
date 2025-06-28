import React from "react";
import { WeatherData } from "../../types/weather";
import { formatTime } from "../../lib/utils/date";

interface WeatherDetailsProps {
  data: WeatherData;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  const details = [
    {
      label: "Feels Like",
      value: `${Math.round(data.main.feels_like)}°C`,
      icon: "🌡️",
    },
    {
      label: "Humidity",
      value: `${data.main.humidity}%`,
      icon: "💧",
    },
    {
      label: "Pressure",
      value: `${data.main.pressure} hPa`,
      icon: "📊",
    },
    {
      label: "Wind Speed",
      value: `${data.wind.speed} m/s`,
      icon: "💨",
    },
    {
      label: "Visibility",
      value: data.visibility
        ? `${(data.visibility / 1000).toFixed(1)} km`
        : "N/A",
      icon: "👁️",
    },
    {
      label: "Sunrise",
      value: formatTime(data.sys.sunrise),
      icon: "🌅",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {details.map((detail, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
        >
          <div className="text-2xl mb-1">{detail.icon}</div>
          <div className="text-xs text-gray-600 mb-1">{detail.label}</div>
          <div className="font-semibold text-gray-900">{detail.value}</div>
        </div>
      ))}
    </div>
  );
};
