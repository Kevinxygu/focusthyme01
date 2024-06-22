// WebsiteList: Shows the list of websites to block

import React, { useEffect, useState } from 'react'
import * as Styled from './WebsiteList.styles';
import Website from './Website';

    // props for WebsiteList component to add soon
interface WebsiteListProps {
    visible: boolean;
    onHide: () => void;
}

const WebsiteList: React.FC<WebsiteListProps> = ({visible, onHide}) => {
    const STORAGE_KEY_LIST: string = "list";
    const [websiteList, setWebsiteList] = useState<string[]>([]);
    const tempList = ["www.youtube.com", "www.reddit.com"]

    useEffect(() => {
        // load in values from localStorage
        // load in website list
        // const tempList = ["www.youtube.com", "www.reddit.com"]
        localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(tempList));
        const websiteListJSON : string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST) as string);
        if (websiteListJSON) {
            setWebsiteList(websiteListJSON);
        } // consider: may need to add a dependency

        // testing

        console.log(websiteListJSON);
        console.log(typeof websiteListJSON);
    }, [websiteList]);
    return (
        <Styled.Container visible={visible}>
            <Styled.Header>Your blocked sites</Styled.Header>
            <Styled.backButtonContainer>
                <Styled.backButton src='images/backArrow.png' onClick={onHide} />
            </Styled.backButtonContainer>
            <Styled.websiteContainer>            
                {tempList.map((object, index) => {
                return <Website key={index} text={object} />
            })}
            </Styled.websiteContainer>
        </Styled.Container>
    )
}

export default WebsiteList;