import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    args: {
        src: 'https://pbs.twimg.com/profile_images/1793391535041433601/OaITfKQW_400x400.jpg',
        alt: 'Pedro Gouveia'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const PrimaryAvatar: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}


