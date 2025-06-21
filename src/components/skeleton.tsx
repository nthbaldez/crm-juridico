import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'bg-gray-200 animate-pulse rounded-md w-full h-full',
        className,
      )}
      {...props}
    />
  )
}
