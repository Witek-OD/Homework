import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function AppFooter() {
    return (
        <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
            ©2024 Created by My Name. Contact: my.email@example.com
        </Footer>
    );
}