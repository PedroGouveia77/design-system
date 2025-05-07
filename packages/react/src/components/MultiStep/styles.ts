import { styled } from '../../styles';
import { Text } from '../Text';
import { CSS } from '@stitches/react';

export const MultiStepContainer = styled('div', {});

export const Label = styled(Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'xs',
  },
}) as React.ComponentType<ComponentProps<typeof Text> & { css?: CSS }>;

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
}) as React.ComponentType<ComponentProps<'div'> & { css?: CSS }>;

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',
  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
}) as React.ComponentType<ComponentProps<'div'> & { css?: CSS }>;
