import styled from "styled-components"

//HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 0px 10px #000030;
    /* android */
    /* shadow-color: red;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.50;
    shadow-radius: 15px;
    elevation: 5; */
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 45px;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
`