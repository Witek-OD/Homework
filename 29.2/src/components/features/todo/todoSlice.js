import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, text: 'TestTask1', isCompleted: false },
    { id: 2, text: 'TestTask2', isCompleted: true },
    { id: 3, text: 'TestTask3', isCompleted: false }
];

const getId = () => {
    const timestamp = Date.now();
    const randomPart= Math.floor(Math.random() * 10000);
    const randomPart2= Math.floor(Math.random() * 10000);
    return timestamp +randomPart + randomPart2;
};


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: getId(),
                text: action.payload.text,
                isCompleted: false,
            });
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;