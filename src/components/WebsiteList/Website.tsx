import React, { useEffect, useState} from 'react';
import * as Styled from './Website.styles';
//interface for Website props
interface WebsiteProps {
    text: string;
}
const Website: React.FC<WebsiteProps> = ({text}) => {
    return (
        <Styled.Container>
            {text}
            <Styled.Line></Styled.Line>
        </Styled.Container>
    )
}

export default Website;