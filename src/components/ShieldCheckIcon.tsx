import React from "react";

interface ShieldCheckIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ShieldCheckIcon: React.FC<ShieldCheckIconProps> = ({
  className,
  width = 12,
  height = 12,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M6 11C6 11 10 9 10 6V2.5L6 1L2 2.5V6C2 9 6 11 6 11Z"
        stroke="var(--color-success700)"
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6L5.5 7L7.5 5"
        stroke="var(--color-success700)"
        strokeWidth={1.125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckIcon;
