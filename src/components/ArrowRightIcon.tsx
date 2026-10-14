interface ArrowRightIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const ArrowRightIcon = ({
  size = 16,
  className,
  color,
}: ArrowRightIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    color={color}
  >
    <path
      d="M3.33337 8.00001H12.6667M8.00004 12.6667L12.6667 8.00001L8.00004 3.33334"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;