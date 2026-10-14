interface CheckIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const CheckIcon = ({
  size = 16,
  className,
  color,
}: CheckIconProps) => (
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
      d="M13.3334 4L6.00002 11.3333L2.66669 8"
      stroke="currentColor"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;