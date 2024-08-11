import React, { Component } from 'react';
import '../../App.css'

class SmailImage extends Component {
    render() {
        return (
            <ul>
                {this.props.emojis.map(emoji => (
                    <li key={emoji.id} onClick={() => this.props.onEmojiClick(emoji.id)} >
                        {emoji.smiail}  {emoji.clicks}
                    </li>
                ))}
            </ul>
        );
    }
}

export default SmailImage;