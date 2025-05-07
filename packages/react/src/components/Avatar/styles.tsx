import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'
import { ComponentType } from 'react'

const Container = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
})

const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export const AvatarContainer: ComponentType<any> = Container
export const AvatarImage: ComponentType<any> = Image
export const AvatarFallback: ComponentType<any> = Fallback
