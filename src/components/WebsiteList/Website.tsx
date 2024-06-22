import React, { useEffect, useState} from 'react';

//interface for Website props
interface WebsiteProps {
    text: string;
}
const Website: React.FC<WebsiteProps> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}

export default Website;