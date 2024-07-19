import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';
import WebsiteList from '../WebsiteList/WebsiteList';

// Main page component; has the main on/off button + buttons for WebsiteList.tsx
const Main = () => {
    // constants
    const STORAGE_KEY_LIST: string = "list";
    const STORAGE_KEY_ACTIVE: string = "active";

    // React states
    // isActive == determines if we should be blocking websites or not
    const [isActive, setIsActive] = useState<boolean>(false);

    // this is the list of websites to block
    const [websiteList, setWebsiteList] = useState<string[]>([]);

    // this is a state, on whether or not the list of websites is visible or not
    const [websiteListVisible, setWebsiteListVisible] = useState<boolean>(false);

    // function: toggles the current active state, and also refreshes the list of website
    const handleButtonClick = () => {
        // update front end to reflect changes
        if (isActive) {
            // console.log("Going from true to false");

            // Update localStorage to reflect changes to front-end
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(false));
            setIsActive(false);
        } else {
            // console.log("Going from false to true")
            // Update localStorage to reflect changes to front-end
            localStorage.setItem(STORAGE_KEY_ACTIVE, String(true));
            setIsActive(true);
        }

        // chrome Storage: set Active
        chrome.storage.sync.set({ [STORAGE_KEY_ACTIVE]: isActive }, () => {
            chrome.storage.sync.get([STORAGE_KEY_ACTIVE], (result) => {
                console.log(result[STORAGE_KEY_ACTIVE]);
            });
        });  
        
        // console.log("chrome sync says:")

        // chrome Storage: set list of websites
        chrome.storage.sync.set({ [STORAGE_KEY_LIST]: websiteList }, () => {
            chrome.storage.sync.get([STORAGE_KEY_LIST], (result) => {
                console.log(result[STORAGE_KEY_LIST]);
            });
        });   
    };

    // update existing value every time
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

    // Main component that is rendered back.
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