import type { SVGProps } from 'react'

export default function MenuIcon({
  width = 15,
  height = 10,
  stroke = '#0B1B33',
  strokeWidth = 1.66667,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 10"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0.833374 0.833334H14.1667M0.833374 5H14.1667M0.833374 9.16667H14.1667"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}