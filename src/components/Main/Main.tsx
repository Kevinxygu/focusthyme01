import React, { useEffect, useState } from 'react';
import * as Styled from './Main.styles';

const Main = () => {
    const STORAGE_KEY: string = "list"
    const [isActive, setIsActive] = useState<boolean>(true);
    const [websiteList, setWebsiteList] = useState<string[]>([]);


    return (
        <Styled.Container>
            <h1>Hello World!</h1>
        </Styled.Container>
    )
}

export default Main;