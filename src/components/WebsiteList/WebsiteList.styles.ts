// WebsiteList styles
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Styles for Main.tsx
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
    overflow: scroll;
    margin-top: 30px;
`