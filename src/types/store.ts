import { SearchHistoryItem } from "./weather";

export interface WeatherStore {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  searchHistory: SearchHistoryItem[];
  addToHistory: (city: string) => void;
  clearHistory: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
