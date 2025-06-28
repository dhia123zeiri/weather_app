import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = "",
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-3 pr-12 rounded-full border-0 
    bg-white/90 backdrop-blur-sm
    text-gray-900 placeholder-gray-500
    focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none
    transition-all duration-300
    ${error ? "ring-2 ring-red-500" : ""}
    ${className}
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input className={inputClasses} {...props} />
        {icon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-200">{error}</p>}
    </div>
  );
};
