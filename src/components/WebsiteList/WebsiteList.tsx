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

    // refresh the list of websites from chrome storage (part of useEffect)
    useEffect(() => {
        reloadList();
    }, []);

    // reload the list of websites
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

    // add a website to the list
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

    // handle enter key press
    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddWebsite();
        }
    };

    // component to render
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
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            handleAddWebsite();
                        }
                    }}
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
