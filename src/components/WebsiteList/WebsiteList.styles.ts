import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
`

export const Header = styled.p`
    font-weight: 300;
    padding-top: 30px;
    font-size: 15px;
    color: #BABABA;
`

export const backButtonContainer = styled.div`
    position: absolute;
    left: 5px;
    top: 3px;
    cursor: pointer;
    transition: 0.3s ease;
    padding: 25px;

    &:hover {
        opacity: 0.2;
    }
`

export const backButton = styled.img`
    max-width: 20px;
`

export const Container = styled.div<{ visible: boolean }>`
    width: 276px;
    height: 380px;
    text-align: center;
    left: ${({ visible }) => (visible ? '0' : '-100%')};
    top: 0;
    transition: left 0.5s ease;
    z-index: 50;
    position: fixed;
    background-color: #FFFFFF;
`;

export const websiteContainer = styled.div`
    text-align: center;
    vertical-align: middle;
    color: #BABABA;
    justify-content: center;
    max-height: 200px;
    margin-top: 30px;
    background-color: #FFFFFF;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    position: relative;
`

export const InputBox = styled.input`
    padding: 5px;
    margin-right: 10px;

    border: none;
    border-bottom: 1px solid #CCCCCC;
    color: #BABABA;
    font-size: 12px;
    transition: 0.5s ease;
    font-weight: 100;
    width: 150px;

    &:focus {
        border-bottom: 1px solid #1C4480;
        outline: none;
    }

    &::placeholder {
        color: #BABABA;
        font-weight: 100;
    }
`

export const TooltipText = styled.span`
    width: 100px;
    background-color: #BABABA;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    top: 35px;
    left: 30%;
    transform: translateX(-50%);
    transition: 0.3s ease;
    z-index: 1;
`

export const SendButton = styled.img`
    max-width: 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        opacity: 0.2;
    }
`