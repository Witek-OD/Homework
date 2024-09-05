import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function AppHeader() {
    return (
        <Header style={{ backgroundColor: '#1DA57A' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/todo">TODO</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/swapi">SWAPI</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}