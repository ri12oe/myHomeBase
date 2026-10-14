import type { SVGProps } from 'react'

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export default function HomeIcon({
  size = 18,
  stroke = 'white',
  strokeWidth = 1.792,
  ...props
}: HomeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.24 7.46667L8.96 2.24L15.68 7.46667V14.9333C15.68 15.3294 15.5227 15.7092 15.2426 15.9893C14.9626 16.2693 14.5827 16.4267 14.1867 16.4267H3.73334C3.33728 16.4267 2.95744 16.2693 2.67739 15.9893C2.39733 15.7092 2.24 15.3294 2.24 14.9333V7.46667Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.72 16.4267V8.96H11.2V16.4267"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
