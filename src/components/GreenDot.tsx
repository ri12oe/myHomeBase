import type { SVGProps } from 'react'

export default function GreenDot({
  width = 8,
  height = 8,
  fill = '#10B981',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill={fill}
      aria-hidden="true"
      {...props}
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  )
}