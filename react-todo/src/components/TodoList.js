import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'LOAD_TODOS' });
    }, [dispatch]);

    const addTodo = text => {
        dispatch({ type: 'ADD_TODO_REQUEST', payload: { id: Date.now(), text, completed: false } });
    };

    const removeTodo = id => {
        dispatch({ type: 'REMOVE_TODO_REQUEST', payload: id });
    };

    const toggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO_REQUEST', payload: id });
    };

    const editTodo = (id, text) => {
        dispatch({ type: 'EDIT_TODO_REQUEST', payload: { id, text } });
    };

    const clearTodos = () => {
        dispatch({ type: 'CLEAR_TODOS_REQUEST' });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" id="new-todo" placeholder="Add new todo" />
            <button onClick={() => addTodo(document.getElementById('new-todo').value)}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => toggleTodo(todo.id)}>Complete</button>
                        <button onClick={() => editTodo(todo.id, prompt('Edit Todo', todo.text))}>
                            Edit
                        </button>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearTodos}>Clear Todos</button>
        </div>
    );
}