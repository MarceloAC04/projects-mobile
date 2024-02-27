import { Input } from "../Input/Index"
import { Label } from "../Label/index"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    onBlur = null
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth}>
            {/* Label */}
            <Label textLabel={textLabel}/>

            {/* Input */}
            <Input
                placeholder={placeholder}
                editable={editable}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </FieldContent>

    )
}