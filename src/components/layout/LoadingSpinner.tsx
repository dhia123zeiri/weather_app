import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-white">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🌤️</span>
        </div>
      </div>
      <p className="text-lg font-medium">Fetching weather data...</p>
      <p className="text-sm text-white/70">Please wait a moment</p>
    </div>
  );
};