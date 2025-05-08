import { Prefix, TextInputContainer, Input } from "./styles";
import { ComponentProps, forwardRef, ElementRef } from "react";

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>({prefix, ...props}: TextInputProps, ref) => {
    return <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
    </TextInputContainer>
}

TextInput.displayName = 'TextInput'