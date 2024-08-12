import React, { useState, useEffect } from 'react';
import SmailImage from '../src/components/SmailImage/SmailImage';
import './App.css';

const App = () => {
    const smailArr = [
        { id: 1, smiail: '😀', clicks: 0 },
        { id: 2, smiail: '😎', clicks: 0 },
        { id: 3, smiail: '😢', clicks: 0 },
        { id: 4, smiail: '😡', clicks: 0 },
        { id: 5, smiail: '😅', clicks: 0 },
    ];

    const [emojis, setEmojis] = useState(() => {
        const storedSmails = localStorage.getItem('smailVotes');
        return storedSmails ? JSON.parse(storedSmails) : smailArr;
    });

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem('smailVotes', JSON.stringify(emojis));
    }, [emojis]);

    const handleEmojiClick = (id) => {
        const updatedSmails = emojis.map(emoji => {
            if (emoji.id === id) {
                return { ...emoji, clicks: emoji.clicks + 1 };
            }
            return emoji;
        });

        setEmojis(updatedSmails);
    };

    const showResults = () => {
        const maxClicks = Math.max(...emojis.map(emoji => emoji.clicks));
        const winnerEmoji = emojis.find(emoji => emoji.clicks === maxClicks);
        setWinner(winnerEmoji);
    };

    const clearResults = () => {
        const resetEmojis = emojis.map(emoji => ({ ...emoji, clicks: 0 }));
        setEmojis(resetEmojis);
        setWinner(null);
        localStorage.removeItem('smailVotes');
    };

    return (
        <div className="container">
            <h1>Голосование за смайлики</h1>
            <SmailImage smailArr={emojis} onEmojiClick={handleEmojiClick} />
            <div>
                <button onClick={showResults}>Show Results</button>
                <button onClick={clearResults}>Clear Results</button>
            </div>

            {winner && (
                <div>
                    <h2>Результаты голосования</h2>
                    <h3>Победитель: {winner.smiail}</h3>
                    <p>Количество голосов: {winner.clicks}</p>
                </div>
            )}
        </div>
    );
};

export default App;