import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    border-color: black;
    background-color: green;
    border-width: 1px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 5px 5px;
`

export const DescrementBtn = styled(Button)`
    background-color: tomato;
    border-color: black;
`