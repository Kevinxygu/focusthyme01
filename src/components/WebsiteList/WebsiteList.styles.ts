// WebsiteList styles
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Styles for Main.tsx
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
margin: 0;
padding: 0;
font-family: "Roboto", sans-serif;
}
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