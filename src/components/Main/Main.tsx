import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

// Main page component
const Main = () => {
    const STORAGE_KEY: string = "list";
    const [isActive, setIsActive] = useState<boolean>(false);
    const [websiteList, setWebsiteList] = useState<string[]>(["www.youtube.com", "anotherwebsite.com"]);
    const [shouldBlock, setShouldBlock] = useState<boolean>(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            const currentUrl = window.location.hostname;
            const shouldBlockSite = websiteList.some(site => currentUrl.includes(site));
            setShouldBlock(shouldBlockSite);
        } else {
            setShouldBlock(false);
        }
    }, [isActive, websiteList]);

    useEffect(() => {
        if (shouldBlock) {
            const overlay = document.createElement('div');
            overlay.id = 'focus-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundImage = 'url(images/overlay.png)';
            overlay.style.backgroundSize = 'cover';
            overlay.style.zIndex = '10000';
            overlay.style.pointerEvents = 'none'; // Prevent interaction with the overlay
            document.body.innerHTML = ''; // Clear the existing content
            document.body.appendChild(overlay);
        } else {
            const overlay = document.getElementById('focus-overlay');
            if (overlay) {
                overlay.remove();
            }
        }
    }, [shouldBlock]);

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