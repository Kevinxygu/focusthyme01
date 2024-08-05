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

    const handleDelete = () => {
        let list = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST) || "[]");
        list = list.filter((item: string) => item !== text);
        localStorage.setItem(STORAGE_KEY_LIST, JSON.stringify(list));
        refresh();
    };

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
