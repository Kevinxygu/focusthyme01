import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

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
            <Styled.bigButton>

            </Styled.bigButton>
        </Styled.Container>
        </>
    )
}

export default Main;