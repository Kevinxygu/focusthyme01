import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

// Main page component; has the main button + buttons for WebsiteList.tsx
const Main = () => {
    const STORAGE_KEY_LIST: string = "list";
    const STORAGE_KEY_ACTIVE: string = "active";
    const [isActive, setIsActive] = useState<boolean>(false);
    const [websiteList, setWebsiteList] = useState<string[]>([]);
    const [shouldBlock, setShouldBlock] = useState<boolean>(false);

    const handleButtonClick = () => {
        if (isActive) {
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(false));
            setIsActive(false);
        } else {
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(true));
            setIsActive(true);
        }
    };

    useEffect(() => {
        // load in values from localStorage
        // load in website list
        const tempList = ["www.youtube.com", "www.reddit.com"]
        localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(tempList));
        const websiteListJSON : string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST) as string);
        if (websiteListJSON) {
            setWebsiteList(websiteListJSON);
        } // consider: may need to add a dependency

        // load in active
        const isActiveJSON : boolean = JSON.parse(localStorage.getItem(STORAGE_KEY_ACTIVE) as string);
        if (typeof isActiveJSON !== 'undefined' && isActiveJSON !== null) {
            setIsActive(isActiveJSON);
        }

        // testing

        console.log(isActiveJSON);
        console.log(typeof isActiveJSON);

        console.log(websiteListJSON);
        console.log(typeof websiteListJSON);
        // start script to determine shouldBlock
        if (isActive) {
            const currentUrl = window.location.hostname;
            const shouldBlockSite = websiteList.some(site => currentUrl.includes(site));
            setShouldBlock(shouldBlockSite);
        } else {
            setShouldBlock(false);
        }
    }, [isActive, websiteList]);


    return (
        <>
            <Styled.GlobalStyle />
            <Styled.Container isActive={isActive}>
                <Styled.menuContainer>
                    <Styled.menuIcon src={isActive ? 'images/menu-W.png' : 'images/menu.png'} />
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
                    <Styled.button isActive={isActive} onClick={handleButtonClick}>
                        {isActive ? "STOP" : "START"}
                    </Styled.button>
                </Styled.buttonContainer>
            </Styled.Container>
        </>
    );
};

export default Main;