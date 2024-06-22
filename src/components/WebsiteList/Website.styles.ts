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

export const Container = styled.div`
padding: 15px;
font-size: 12px;
color: #BABABA;
font-weight: 300;
`

export const Line = styled.div`
height: 1px;
width: 75px
background-color: #BABABA`