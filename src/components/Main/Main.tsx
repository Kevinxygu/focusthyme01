import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

// Main page component
const Main = () => {
    const STORAGE_KEY: string = "list"
    const [isActive, setIsActive] = useState<boolean>(false);
    const [websiteList, setWebsiteList] = useState<string[]>([]);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
        <Styled.GlobalStyle />
        <Styled.Container>
            <Styled.menuContainer>
                <Styled.menuIcon src='images/menu.png'/>
            </Styled.menuContainer>

            <Styled.smallHeader isActive={isActive}>
                Focus mode is
            </Styled.smallHeader>
            <Styled.bigHeader isActive={isActive}>
                {isActive ? "ON" : "OFF"}
            </Styled.bigHeader>
            <Styled.buttonContainer>
            {!isActive && (
                        <>
                            <Styled.background className="background1" />
                            <Styled.background className="background2" />
                        </>
                    )}
                <Styled.button isActive={isActive}>
                    {isActive ? "STOP" : "START"}
                </Styled.button>
            </Styled.buttonContainer>
        </Styled.Container>
        </>
    )
}

export default Main;