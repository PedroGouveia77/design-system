import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'
import { CSS } from '@stitches/react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
}) as React.ComponentType<ComponentProps<'div'> & { css?: CSS }>

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
