// README.md Content for the project
/\*

# Weather App

A modern, responsive weather application built with Next.js 15, TypeScript, Zustand, and TanStack Query.

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🔍 City search with input validation
- 📱 Fully responsive design
- 💾 Search history with local storage
- ⚡ Fast data fetching with TanStack Query
- 🎨 Beautiful UI with Tailwind CSS and glassmorphism effects
- 🔄 Loading states and error handling
- 📊 Comprehensive weather details

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Styling**: Tailwind CSS
- **Icons**: Emoji-based weather icons

## Architecture

The project follows a clean architecture pattern with clear separation of concerns:

```
src/
├── app/                    # Next.js App Router
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components
│   ├── weather/            # Weather-specific components
│   └── layout/             # Layout components
├── lib/                    # Business logic and utilities
│   ├── api/                # API layer
│   ├── stores/             # Zustand stores
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   └── constants/          # Application constants
└── types/                  # TypeScript type definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

The app uses a public OpenWeatherMap API key included in the code. For production, consider using environment variables:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Key Components

### State Management (Zustand)

- `weatherStore.ts`: Manages selected city, search history, and loading state
- Persists search history to localStorage

### Data Fetching (TanStack Query)

- `useWeather.ts`: Custom hook for fetching weather data
- Implements caching, retry logic, and error handling

### UI Components

- Modular, reusable components with TypeScript interfaces
- Responsive design with Tailwind CSS
- Glassmorphism effects and smooth animations

## API Integration

The app integrates with the OpenWeatherMap API to fetch:

- Current temperature and "feels like" temperature
- Weather description and conditions
- Humidity, pressure, and wind speed
- Sunrise and sunset times
- Min/max temperatures

## Performance Features

- Query caching with TanStack Query (5-minute stale time)
- Debounced search input
- Optimized re-renders with proper state management
- Lazy loading and code splitting

## Error Handling

- Network error detection and user-friendly messages
- API error handling with specific error codes
- Retry mechanisms for failed requests
- Form validation with real-time feedback

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast color schemes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
\*/
