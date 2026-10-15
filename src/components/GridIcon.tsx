import React from "react";

interface GridIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const GridIcon: React.FC<GridIconProps> = ({
  className,
  width = 28,
  height = 28,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M22.1667 3.5H5.83333C4.54467 3.5 3.5 4.54467 3.5 5.83333V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V5.83333C24.5 4.54467 23.4553 3.5 22.1667 3.5Z"
        stroke="#0B1B33"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 14H24.5M14 3.5V24.5"
        stroke="#0B1B33"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GridIcon;