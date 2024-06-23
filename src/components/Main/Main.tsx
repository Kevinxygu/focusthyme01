import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';
import WebsiteList from '../WebsiteList/WebsiteList';

// Main page component; has the main button + buttons for WebsiteList.tsx
const Main = () => {
    const STORAGE_KEY_LIST: string = "list";
    const STORAGE_KEY_ACTIVE: string = "active";
    const [isActive, setIsActive] = useState<boolean>(false);
    const [websiteList, setWebsiteList] = useState<string[]>([]);
    const [websiteListVisible, setWebsiteListVisible] = useState<boolean>(false);

    const handleButtonClick = () => {
        if (isActive) {
            console.log("Going from true to false");
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(false));
            setIsActive(false);
        } else {
            console.log("Going from false to true")
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(true));
            setIsActive(true);
        }

        // send message to content.js for list
        // chrome.runtime.sendMessage({
        //     type: 'UPDATE_WEBSITE_LIST',
        //     data: websiteList
        // });

        // chrome.runtime.sendMessage({
        //     type: 'UPDATE_ACTIVE',
        //     data: isActive
        // });

        // store into chrome storage
        console.log("chrome sync says:")
        console.log(isActive);
        console.log("^ isActive");
        chrome.storage.sync.set({ [STORAGE_KEY_ACTIVE]: isActive }, () => {
            chrome.storage.sync.get([STORAGE_KEY_ACTIVE], (result) => {
                console.log(result[STORAGE_KEY_ACTIVE]);
            });
        });  
        
        console.log("chrome sync says:")
        chrome.storage.sync.set({ [STORAGE_KEY_LIST]: websiteList }, () => {
            chrome.storage.sync.get([STORAGE_KEY_LIST], (result) => {
                console.log(result[STORAGE_KEY_LIST]);
            });
        });   
    };

    useEffect(() => {
        // load in values from localStorage
        // load in website list
        // const tempList = ["www.youtube.com", "www.reddit.com"]
        // localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(tempList));
        const websiteListJSON : string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST) as string);
        if (websiteListJSON) {
            setWebsiteList(websiteListJSON);
        } // consider: may need to add a dependency

        // load in active
        const isActiveJSON : boolean = JSON.parse(localStorage.getItem(STORAGE_KEY_ACTIVE) as string);
        if (typeof isActiveJSON !== 'undefined' && isActiveJSON !== null) {
            setIsActive(isActiveJSON);
        }

    }, [isActive, websiteList]);


    return (
        <>
            <Styled.GlobalStyle />
            <Styled.Container isActive={isActive}>
                <Styled.menuContainer onClick={() => setWebsiteListVisible(true)}>
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
                <WebsiteList visible={websiteListVisible} onHide={() => setWebsiteListVisible(false)} />
            </Styled.Container>
        </>
    );
};

export default Main;