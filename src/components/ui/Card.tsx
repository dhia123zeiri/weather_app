import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = 'rounded-2xl shadow-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white',
    glass: 'bg-white/95 backdrop-blur-xl border border-white/20',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

