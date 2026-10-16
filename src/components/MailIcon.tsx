// MailIcon.tsx
import React from "react";

interface MailIconProps {
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

const MailIcon: React.FC<MailIconProps> = ({
  size = 20,
  className,
  color = "var(--color-ink400)",
  strokeWidth = 1.66667,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M16.6667 3.33334H3.33335C2.41288 3.33334 1.66669 4.07954 1.66669 5.00001V15C1.66669 15.9205 2.41288 16.6667 3.33335 16.6667H16.6667C17.5872 16.6667 18.3334 15.9205 18.3334 15V5.00001C18.3334 4.07954 17.5872 3.33334 16.6667 3.33334Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 5.83334L10 10.8333L1.66669 5.83334"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;