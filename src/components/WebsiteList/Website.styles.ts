import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Styles for Website.tsx (singular component that is then iterated over in WebsiteList.tsx)
// Using styled-components, where docs are here: https://styled-components.com/docs
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
`

export const Text = styled.p`
    font-size: 14px;
    color: #BABABA;
    font-weight: 200;
    margin: 8px 0px;
    display: inline-block;
`

export const Container = styled.div`
    padding-top: 12px;
    width: 100%;
    text-align: center;
    align-items: center;
    vertical-align: middle;
`

export const Line = styled.div`
    height: 0.5px;
    width: 120px;
    background-color: #BABABA;
    margin: auto;
`

export const DeleteButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
    display: inline-block;
`

export const DeleteImage = styled.img`
    max-width: 8px;
`
