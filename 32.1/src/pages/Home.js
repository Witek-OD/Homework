import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="About Me" bordered={false}>
                        <Title level={2}>Your Name</Title>
                        <Paragraph>
                            I am a frontend developer with experience in React, Redux, and Ant Design.
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Skills" bordered={false}>
                        <ul>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                            <li>Ant Design</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Experience" bordered={false}>
                        <Paragraph>
                            Tales that I am a frontend developer with experience in React, Redux and Ant Design.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}