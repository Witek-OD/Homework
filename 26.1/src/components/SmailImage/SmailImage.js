import React from 'react';
import '../../App.css'

const SmailImage = ({ smailArr, onEmojiClick }) => {
    return (
        <ul>
            {smailArr.map(smail => (
                <li key={smail.id} onClick={() => onEmojiClick(smail.id)} >
                    {smail.smiail}  {smail.clicks}
                </li>
            ))}
        </ul>
    );
};

export default SmailImage;