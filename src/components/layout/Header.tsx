import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = "🌤️ Weather App",
  subtitle = "Get current weather information for any city worldwide with accurate temperature, humidity, and wind data.",
}) => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
};
