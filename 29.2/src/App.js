import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/AboutMe/AboutMe";
import { ThemeProvider } from "./components/ThemeContext";
import NotFound from "./components/NotFound/NotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
    const menuList = [
        { id: 'home', title: 'Home', path: '/' },
        { id: 'contact', title: 'Contact', path: '/contact' },
        { id: 'about', title: 'About', path: '/about' }
    ];

    const contactList = [
        { type: 'Phone', value: '+380000000000' },
        { type: 'Email', value: 'username@mail.com.ua' },
        { type: 'Viber', value: '+380000000000' },
        { type: 'Telegram', value: '+380000000000' },
        { type: 'Skype', value: 'live:.1234567890' }
    ];

    return (
        <ThemeProvider>
            <Router>
                <ErrorBoundary>
                    <Header menu={menuList} />
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route path="/contact" element={<Contacts contacts={contactList} />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ErrorBoundary>
            </Router>
        </ThemeProvider>
    );
}

export default App;