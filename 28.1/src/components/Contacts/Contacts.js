import React from 'react';
import '../../App.css';
import {useTheme} from "../ThemeContext";

const Contacts = ({contacts}) => {
    const {theme} = useTheme();

    return (
        <div className={theme==='light' ? 'light-theme':'dark-theme'}>
            <div className="container">
                <h1>Contacts</h1>
                <ul>
                    {contacts.map(contactItem => (

                        <li key={contactItem.type}>{contactItem.type} : {contactItem.value}</li>
                    ))}

                </ul>

            </div>
        </div>
    );
};

export default Contacts;