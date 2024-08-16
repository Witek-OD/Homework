import React from 'react';
import '../../App.css';
import { useTheme } from "../ThemeContext";
import { Link } from 'react-router-dom';

const Header = ({ menu }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme === 'light' ? 'menu light-theme' : 'menu dark-theme'}>
            <nav className="menu">
                <ul>
                    {menu.map(menuItem => (
                        <li key={menuItem.id}>
                            <Link to={menuItem.path}>{menuItem.title}</Link>
                        </li>
                    ))}
                    <button onClick={toggleTheme}>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                </ul>
            </nav>
        </div>
    );
};

export default Header;