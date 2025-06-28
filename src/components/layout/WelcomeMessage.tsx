import React from "react";
import { Card } from "../ui/Card";

export const WelcomeMessage: React.FC = () => {
  return (
    <Card variant="glass" className="p-12 max-w-md w-full text-center">
      <div className="text-8xl mb-6">🌍</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Welcome to Weather App
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Enter a city name above to get started with current weather information
        from around the world.
      </p>
    </Card>
  );
};
