export const validateCityName = (city: string): boolean => {
  return city.trim().length > 0 && city.trim().length <= 100;
};

export const sanitizeCityName = (city: string): string => {
  return city.trim().replace(/[^\w\s,-]/g, '');
};