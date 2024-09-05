import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Todo from './pages/TodoList';
import Swapi from './pages/SwapiPage';
import './App.css';

const theme = {
    token: {
        colorPrimary: '#1DA57A',
        colorLink: '#1DA57A',
    },
};

function App() {
    return (
        <ConfigProvider theme={theme}>
            <Router>
                <Layout className="layout">
                    <AppHeader />
                    <Layout.Content style={{ padding: '0 50px' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/todo" element={<Todo />} />
                            <Route path="/swapi" element={<Swapi />} />
                        </Routes>
                    </Layout.Content>
                    <AppFooter />
                </Layout>
            </Router>
        </ConfigProvider>
    );
}

export default App;