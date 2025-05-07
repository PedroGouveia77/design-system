import { styled } from "../styles";
import { ComponentProps } from "react";

export const TextArea = styled('textarea', {
    backgroundColor: '$gray900',
    borderRadius: '$sm',
    padding: '$3 $4',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: 'regular',
    resize: 'vertical',
    minHeight: 80,
    color: '$white',
    
    '&:focus': {
        outline: 0,
        borderColor: '$ignite300'
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },
    '&:placeholder': {
        color: '$gray400'
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'