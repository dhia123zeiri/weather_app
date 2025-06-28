import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "blue" | "gray";
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "white",
  text,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    white: "border-white/30 border-t-white",
    blue: "border-blue-200 border-t-blue-600",
    gray: "border-gray-200 border-t-gray-600",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
      />
      {text && (
        <p
          className={`text-sm ${
            color === "white" ? "text-white" : "text-gray-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
};
