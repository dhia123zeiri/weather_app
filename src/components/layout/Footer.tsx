import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 text-center text-white/70">
      <div className="space-y-2">
        <p className="text-sm">
          Weather data provided by{" "}
          <a
            href="https://openweathermap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors underline"
          >
            OpenWeatherMap
          </a>
        </p>
        <p className="text-xs">
          Built with Next.js 15, TypeScript, Zustand, and TanStack Query
        </p>
      </div>
    </footer>
  );
};
