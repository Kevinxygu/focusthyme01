import React from 'react';
import * as Styled from './Website.styles';

interface WebsiteProps {
    text: string;
    refresh: () => void;
}

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
