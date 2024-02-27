import { InputText } from "./style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onBlur

}) {
    return(
        <InputText
            placeholder={placeholder} 
            editable={editable}
            value={fieldValue}
            onChangeText={onChangeText}
            keyboardType={keyType}
            maxLength={maxLength}
            onBlur={onBlur}
        />
    )
}