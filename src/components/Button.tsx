import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp>
      <span
        className={clsx(
          'py-',
          {

          }
        )}
      >
        {children}
      </span>
    </Comp>
  )
}