import React, { useState, useEffect } from 'react';
import { List, Spin } from 'antd';

const SwapiPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spin style={{ display: 'block', margin: '50px auto' }} />;
    }

    return (
        <div style={{ padding: 24 }}>
            <List
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
        </div>
    );
};

export default SwapiPage;