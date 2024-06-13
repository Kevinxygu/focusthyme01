import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

const Main = () => {
    const STORAGE_KEY: string = "list"
    const [isActive, setIsActive] = useState<boolean>(true);
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
                <Styled.background>
                <Styled.button>
                    
                </Styled.button>
                </Styled.background>
            </Styled.buttonContainer>
        </Styled.Container>
        </>
    )
}

export default Main;