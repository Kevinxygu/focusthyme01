// WebsiteList: Shows the list of websites to block

import React, { useEffect, useState } from 'react'
import * as Styled from './WebsiteList.styles';

    // props for WebsiteList component to add soon
interface WebsiteListProps {
    visible: boolean;
    onHide: () => void;
}

const WebsiteList: React.FC<WebsiteListProps> = ({visible, onHide}) => {

    return (
        <Styled.Container visible={visible}>
            <p>Hello World!</p>
            <button onClick={onHide}>Hide</button>

        </Styled.Container>
    )
}

export default WebsiteList;