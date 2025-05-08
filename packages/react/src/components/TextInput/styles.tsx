import { styled } from '../../styles';
import { CSS } from '@stitches/react';
import { ComponentProps, ElementType } from 'react';

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
}) as React.ComponentType<ComponentProps<'div'> & { css?: CSS }>;

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
}) as React.ComponentType<ComponentProps<'span'> & { css?: CSS }>;

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
}) as React.ComponentType<ComponentProps<'input'> & { css?: CSS }>;


export interface TextInputContainerProps extends ComponentProps<typeof TextInputContainer> {
  as?: ElementType;
}

TextInputContainer.displayName = 'TextInputContainer';

export interface PrefixProps extends ComponentProps<typeof Prefix> {
  as?: ElementType;
}

Prefix.displayName = 'Prefix';

export interface InputProps extends ComponentProps<typeof Input> {
  as?: ElementType;
}

Input.displayName = 'Input';
