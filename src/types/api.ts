export interface APIResponse<T> {
  data?: T;
  error?: string;
  loading: boolean;
  success: boolean;
}

export interface GeolocationCoords {
  latitude: number;
  longitude: number;
}

export interface UserPreferences {
  unit: 'metric' | 'imperial' | 'kelvin';
  theme: 'light' | 'dark' | 'auto';
  language: string;
}
