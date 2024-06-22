import React, { useEffect, useState } from 'react';
import * as Styled from './WebsiteList.styles';
import Website from './Website';

// props for WebsiteList component to add soon
interface WebsiteListProps {
    visible: boolean;
    onHide: () => void;
}

const WebsiteList: React.FC<WebsiteListProps> = ({ visible, onHide }) => {
    const STORAGE_KEY_LIST: string = "list";
    const [websiteList, setWebsiteList] = useState<string[]>([]);
    const [newWebsite, setNewWebsite] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    useEffect(() => {
        const websiteListJSON: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST) as string);
        if (websiteListJSON) {
            setWebsiteList(websiteListJSON);
        }
    }, []);

    const handleAddWebsite = () => {
        if (newWebsite.trim() !== "") {
            const updatedList = [...websiteList, newWebsite];
            setWebsiteList(updatedList);
            localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(updatedList));
            setNewWebsite('');
        }
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
                {inputFocused && <Styled.TooltipText>Don't forget www!</Styled.TooltipText>}
                <Styled.SendButton src='images/send.png' onClick={handleAddWebsite} />
            </Styled.InputContainer>
            <Styled.websiteContainer>
                {websiteList.map((object, index) => {
                    return <Website key={index} text={object} />
                })}
            </Styled.websiteContainer>
        </Styled.Container>
    )
}

export default WebsiteList;
