import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
margin: 0;
padding: 0;
font-family: "Roboto", sans-serif;
}
`

export const Container = styled.div`
    width: 276px;
    height: 333px;
    text-align: center;
`;

export const menuContainer = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    top: 20px;
    left: 20px;
    position: absolute;


    &:hover {
    opacity: 0.7;
    }
`;

export const menuIcon = styled.img`
    max-width: 30px;
`;

export const smallHeader = styled.h2`
color: grey;
font-weight: 200;
margin-top: 50px;
font-size: 12px;
`

export const bigHeader = styled.h1`
color: blue;
font-weight: 300;
font-size: 20px;
margin: 5px;
`

export const butttonContainer = styled.div`
width: 10px;
height: 10px;
background-color: red;
`

export const buttonContainer = styled.div`
`

export const background = styled.div`
`

export const button = styled.div`
`