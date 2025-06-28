import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { WeatherStore } from '../../types/store';
import { SearchHistoryItem } from '../../types/weather';
import { MAX_SEARCH_HISTORY } from '../constants/ui';

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      selectedCity: '',
      searchHistory: [],
      isLoading: false,

      setSelectedCity: (city: string) => {
        set({ selectedCity: city });
      },

      addToHistory: (city: string) => {
        const currentHistory = get().searchHistory;
        const newItem: SearchHistoryItem = {
          city: city.trim(),
          timestamp: Date.now(),
        };

        const filteredHistory = currentHistory.filter(
          (item) => item.city.toLowerCase() !== city.toLowerCase()
        );

        const updatedHistory = [newItem, ...filteredHistory].slice(0, MAX_SEARCH_HISTORY);

        set({ searchHistory: updatedHistory });
      },

      clearHistory: () => {
        set({ searchHistory: [] });
      },

      setIsLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'weather-app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        searchHistory: state.searchHistory,
      }),
    }
  )
);