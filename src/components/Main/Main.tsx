import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

// Main page component
const Main = () => {
    const STORAGE_KEY: string = "list"
    const [isActive, setIsActive] = useState<boolean>(false);
    const [websiteList, setWebsiteList] = useState<string[]>([]);


    return (
        <>
        <Styled.GlobalStyle />
        <Styled.Container>
            <Styled.menuContainer>
                <Styled.menuIcon src='images/menu.png'/>
            </Styled.menuContainer>

            <Styled.smallHeader>
                Focus mode is
            </Styled.smallHeader>
            <Styled.bigHeader>
                {isActive ? "ON" : "OFF"}
            </Styled.bigHeader>
            <Styled.buttonContainer>
                <Styled.background className="background1"></Styled.background>
                <Styled.background className="background2"></Styled.background>

                <Styled.button>
                    START
                </Styled.button>
            </Styled.buttonContainer>
        </Styled.Container>
        </>
    )
}

export default Main;