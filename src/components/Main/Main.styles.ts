import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Styles for Main.tsx
// Using styled-components, where docs are here: https://styled-components.com/docs
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
margin: 0;
padding: 0;
font-family: "Roboto", sans-serif;
}
`

export const Container = styled.div<{ isActive: boolean }>`
    width: 276px;
    height: 380px;
    text-align: center;
    background-image: ${({ isActive }) => (isActive ? 'url(images/ON-background.gif)' : '#none')};
`;

export const menuContainer = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    top: 10px;
    left: 10px;
    position: absolute;


    &:hover {
    opacity: 0.7;
    }
`;

export const menuIcon = styled.img`
    max-width: 30px;
`;

export const smallHeader = styled.h2<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#BABABA')};
    font-weight: 200;
    padding-top: 50px;
    font-size: 12px;
`

export const bigHeader = styled.h1<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#1C4480')};;
    font-weight: 300;
    font-size: 20px;
    margin: 5px;
`

export const buttonContainer = styled.div`
position: relative;
width: 120px;
height: 120px;
margin: auto;
margin-top: 80px;
`

export const background = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &.background1 {
    animation: pulse1 1.2s ease infinite;
    background: #99BFF9;

    @keyframes pulse1 {
      0% {
        transform: scale(1, 1);
      }
      50% {
        opacity: 0.1;
      }
      100% {
        transform: scale(1.75);
        opacity: 0;
      }
    }
  }

  &.background2 {
    animation: pulse2 1.2s ease infinite;
    background: #99BFF9;
    z-index: -1;
    animation-delay: 0.3s; // add to delay

    @keyframes pulse2 {
      0% {
        transform: scale(1, 1);
      }
      50% {
        opacity: 0.3;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
`

export const button = styled.button<{ isActive: boolean }>`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    z-index: 30;
    border: ${({ isActive }) => (isActive ? 'solid 3px white' : 'none')};
    background: ${({ isActive }) => (isActive ? 'transparent' : '#1C4480')};
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
    transition: 0.1s ease;
    font-size: 15px;

    &:hover {
        width: 130px;
        height: 130px;
        top: -5px;
        left: -5px;
        font-size: 18px;
    }
`

