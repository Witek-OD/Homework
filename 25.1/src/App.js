import React, { Component } from 'react';
import SmailImage from '../src/components/SmailImage/SmailImage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                { id: 1, smiail: '😀', clicks: 0 },
                { id: 2, smiail: '😎', clicks: 0 },
                { id: 3, smiail: '😢', clicks: 0 },
                { id: 4, smiail: '😡', clicks: 0 },
                { id: 5, smiail: '😅', clicks: 0 },
            ],
            winner: null
        }; // для отображения
    }

    componentDidMount() {
        const storedSmails = localStorage.getItem('smailVotes');
        if (storedSmails) {
            this.setState({ emojis: JSON.parse(storedSmails) });
        }
    }

    handleEmojiClick = (id) => {
        const updatedSmails = this.state.emojis.map(emoji => {
            if (emoji.id === id) {
                return { ...emoji, clicks: emoji.clicks + 1 };
            }
            return emoji;
        });

        this.setState({ emojis: updatedSmails });
        localStorage.setItem('smailVotes', JSON.stringify(updatedSmails));
    }

    showResults = () => {
        const maxClicks = Math.max(...this.state.emojis.map(emoji => emoji.clicks));
        const winner = this.state.emojis.find(emoji => emoji.clicks === maxClicks);
        this.setState({ winner });
    }

    clearResults = () => {
        const resetEmojis = this.state.emojis.map(emoji => ({ ...emoji, clicks: 0 }));
        this.setState({ emojis: resetEmojis, winner: null });
        localStorage.removeItem('emojiVotes');
    }

    render() {
        return (
            <div className="container">
                <h1>Голосование за смайлики</h1>
                <SmailImage emojis={this.state.emojis} onEmojiClick={this.handleEmojiClick} />
                <ul>
                    <li>
                        <button onClick={this.showResults}>Show Results</button>
                    </li>
                    <li>
                        <button onClick={this.clearResults}>Clear Results</button>
                    </li>
                </ul>


                {this.state.winner && (
                    <div>
                        <h2>Результаты :голосования</h2>
                        <h3>Победитель: {this.state.winner.smiail}</h3>
                        <p>Количество голосов: {this.state.winner.clicks}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default App;