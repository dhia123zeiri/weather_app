import React from "react";
import { useWeatherStore } from "../../lib/stores/weatherStore";
import { Button } from "../ui/Button";

interface SearchHistoryChipsProps {
  onSelect: (city: string) => void;
}

export const SearchHistoryChips: React.FC<SearchHistoryChipsProps> = ({
  onSelect,
}) => {
  const { searchHistory, clearHistory, isLoading } = useWeatherStore();

  if (searchHistory.length === 0) {
    return null;
  }

  return (
    <div className="text-center space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/80">Recent Searches</h3>
        <button
          onClick={clearHistory}
          className="text-xs text-white/60 hover:text-white transition-colors"
          disabled={isLoading}
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {searchHistory.map((item, index) => (
          <Button
            key={`${item.city}-${index}`}
            variant="outline"
            size="sm"
            onClick={() => onSelect(item.city)}
            disabled={isLoading}
            className="text-sm"
          >
            {item.city}
          </Button>
        ))}
      </div>
    </div>
  );
};
