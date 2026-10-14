// XMarkIcon.tsx
import React from "react";

interface xMarkIconProps {
  width?: number;
  height?: number;
  className?: string;
  backgroundColor?: string;
  iconColor?: string;
}

const XMarkIcon: React.FC<xMarkIconProps> = ({
  width = 40,
  height = 40,
  className,
  backgroundColor = "#0B1B33",
  iconColor = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill={backgroundColor} />

      <rect
        x="13.6362"
        y="24.9497"
        width="16"
        height="2"
        rx="1"
        transform="rotate(-45 13.6362 24.9497)"
        fill={iconColor}
      />

      <rect
        x="15.0503"
        y="13.636"
        width="16"
        height="2"
        rx="1"
        transform="rotate(45 15.0503 13.636)"
        fill={iconColor}
      />
    </svg>
  );
};

export default XMarkIcon;