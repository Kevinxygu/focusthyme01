import React from 'react';
import * as Styled from './Website.styles';

// Props needed to pass down to Website component from WebsiteList component
interface WebsiteProps {
    text: string;
    refresh: () => void;
}

// Singular website component that is iterated over in WebsiteList.tsx and displays as a line item with other websites
const Website: React.FC<WebsiteProps> = ({ text, refresh }) => {
    const STORAGE_KEY_LIST: string = "list";

    // Delete button functionality from chrome sync storage list
    const handleDelete = () => {
        chrome.storage.sync.get([STORAGE_KEY_LIST], (result) => {
            let list = result[STORAGE_KEY_LIST] || [];
            list = list.filter((item: string) => item !== text);
            chrome.storage.sync.set({ [STORAGE_KEY_LIST]: list }, () => {
                refresh();
            });
        });
    };

    // Render website component
    return (
        <Styled.Container>
            <Styled.Text>{text}</Styled.Text>
            <Styled.DeleteButton onClick={handleDelete}>
                <Styled.DeleteImage src="images/x.png" alt="Delete" />
            </Styled.DeleteButton>
            <Styled.Line></Styled.Line>
        </Styled.Container>
    )
}

export default Website;