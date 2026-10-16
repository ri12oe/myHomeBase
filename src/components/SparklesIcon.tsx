import React from "react";

interface SparklesIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const SparklesIcon: React.FC<SparklesIconProps> = ({
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
        d="M14 3.5L16.2166 9.45L22.1666 11.6667L16.2166 13.8833L14 19.8333L11.7833 13.8833L5.83331 11.6667L11.7833 9.45L14 3.5Z"
        stroke="var(--color-ink900)"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1667 17.5L23.1 20.0667L25.6667 21L23.1 21.9333L22.1667 24.5L21.2334 21.9333L18.6667 21L21.2334 20.0667L22.1667 17.5Z"
        stroke="var(--color-ink900)"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparklesIcon;