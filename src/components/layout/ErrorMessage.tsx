import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <Card variant="glass" className="p-8 max-w-md w-full text-center">
      <div className="text-6xl mb-4">⚠️</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        Oops! Something went wrong
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button onClick={onRetry} className="mx-auto">
          Try Again
        </Button>
      )}
    </Card>
  );
};
