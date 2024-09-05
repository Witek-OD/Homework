import React, { useState } from 'react';
import { List, Button, Input } from 'antd';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: 24 }}>
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите задачу"
            />
            <Button type="primary" onClick={addTodo} style={{ marginTop: 10 }}>
                Добавить
            </Button>
            <List
                style={{ marginTop: 20 }}
                bordered
                dataSource={todos}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<Button onClick={() => removeTodo(index)}>Удалить</Button>]}
                    >
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TodoList;