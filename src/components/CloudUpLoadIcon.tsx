import React from "react";

interface CloudUploadIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const CloudUploadIcon: React.FC<CloudUploadIconProps> = ({
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
        d="M23.3334 18.9001C24.2485 18.2668 24.9388 17.359 25.3045 16.3078C25.6701 15.2566 25.6923 14.1165 25.3677 13.0519C25.0431 11.9873 24.3887 11.0534 23.4987 10.385C22.6088 9.71667 21.5295 9.3484 20.4167 9.3334H18.3167C17.964 8.14372 17.3449 7.05005 16.5063 6.13544C15.6678 5.22082 14.6318 4.50932 13.4771 4.05497C12.3225 3.60061 11.0794 3.41535 9.84247 3.51325C8.60549 3.61115 7.40708 3.98964 6.33825 4.61997C5.26943 5.25031 4.35829 6.11591 3.67404 7.15104C2.98979 8.18618 2.55041 9.36362 2.38928 10.594C2.22815 11.8243 2.3495 13.0752 2.74411 14.2516C3.13872 15.428 3.79622 16.4991 4.66668 17.3834"
        stroke="var(--color-ink900)"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6666 16.3335V23.3335M9.33331 16.3335V23.3335M14 18.6668V25.6668"
        stroke="var(--color-ink900)"
        strokeWidth={2.45}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloudUploadIcon;