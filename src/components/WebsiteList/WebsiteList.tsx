import React, { useEffect, useState } from 'react';
import * as Styled from './WebsiteList.styles';
import Website from './Website';

// props for WebsiteList component needed
interface WebsiteListProps {
    visible: boolean;
    onHide: () => void;
}

// List of websites that are blocked
const WebsiteList: React.FC<WebsiteListProps> = ({ visible, onHide }) => {
    const STORAGE_KEY_LIST: string = "list";
    const [websiteList, setWebsiteList] = useState<string[]>([]);
    const [newWebsite, setNewWebsite] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    useEffect(() => {
        chrome.storage.sync.get([STORAGE_KEY_LIST], (result) => {
            const websiteListJSON: string[] = result[STORAGE_KEY_LIST];
            if (websiteListJSON) {
                setWebsiteList(websiteListJSON);
            }
        });
    }, []);

    const reloadList = () => {
        chrome.storage.sync.get([STORAGE_KEY_LIST], (result) => {
            const websiteListJSON: string[] = result[STORAGE_KEY_LIST];
            if (websiteListJSON) {
                setWebsiteList(websiteListJSON);
            } else {
                setWebsiteList([]);
            }
        });
    };

    const handleAddWebsite = () => {
        if (newWebsite.trim() !== "") {
            const updatedList = [...websiteList, newWebsite];
            setWebsiteList(updatedList);
            chrome.storage.sync.set({ [STORAGE_KEY_LIST]: updatedList }, () => {
                console.log("stored to chrome sync");
            });
        }
        reloadList();
        setNewWebsite('');
    };

    return (
        <Styled.Container visible={visible}>
            <Styled.Header>Your blocked sites</Styled.Header>
            <Styled.backButtonContainer>
                <Styled.backButton src='images/backArrow.png' onClick={onHide} />
            </Styled.backButtonContainer>
            <Styled.InputContainer>
                <Styled.InputBox
                    type="text"
                    value={newWebsite}
                    onChange={(e) => setNewWebsite(e.target.value)}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    placeholder="Add new..."
                />
                {inputFocused && <Styled.TooltipText>Double-check if your website has www at the front!</Styled.TooltipText>}
                <Styled.SendButton src='images/send.png' onClick={handleAddWebsite} />
            </Styled.InputContainer>
            <Styled.websiteContainer>
                {websiteList.map((object, index) => {
                    return <Website key={index} text={object} refresh={reloadList} />;
                })}
            </Styled.websiteContainer>
        </Styled.Container>
    );
};

export default WebsiteList;
