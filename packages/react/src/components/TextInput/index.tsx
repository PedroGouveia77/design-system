import { ComponentProps, forwardRef, Ref } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  containerProps?: ComponentProps<typeof TextInputContainer>
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, containerProps, ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <TextInputContainer {...containerProps}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  }
)

TextInput.displayName = 'TextInput'
