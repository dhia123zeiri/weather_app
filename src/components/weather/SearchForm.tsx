import React, { useState } from 'react';
import { useWeatherStore } from '../../lib/stores/weatherStore';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { SearchHistoryChips } from './SearchHistoryChips';

interface SearchFormProps {
  onSearch: (city: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { isLoading, addToHistory } = useWeatherStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedInput = input.trim();
    
    if (!trimmedInput) {
      setError('Please enter a city name');
      return;
    }

    if (trimmedInput.length < 2) {
      setError('City name must be at least 2 characters');
      return;
    }

    onSearch(trimmedInput);
    addToHistory(trimmedInput);
    setInput('');
  };

  const handleHistorySelect = (city: string) => {
    onSearch(city);
    setInput('');
    setError('');
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <Input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter city name..."
            disabled={isLoading}
            error={error}
            icon={<span className="text-xl">🔍</span>}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            isLoading={isLoading}
            className="px-6"
          >
            Search
          </Button>
        </div>
      </form>

      <SearchHistoryChips onSelect={handleHistorySelect} />
    </div>
  );
};