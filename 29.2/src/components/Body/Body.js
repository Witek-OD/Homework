import React from 'react';
import '../../App.css';
import { useForm } from 'react-hook-form';
import { useTheme } from "../ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../features/todo/todoSlice';

const Body = () => {
    const { theme } = useTheme();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTodo({ text: data.value }));
        reset();
    };

    return (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <div className="container">
                <h1>ToDoList</h1>

                <form className="form js--form" onSubmit={handleSubmit(onSubmit)}>
                    <input id="inTask" type="text" name="value" className="form__input js--form__input"
                           {...register('value', { required: true, minLength: 5 })} />

                    <button type="submit" className="form__btn">Додати</button>

                    {errors.value && errors.value.type === 'required' && <p>Поле обов'язкове для заповнення</p>}
                    {errors.value && errors.value.type === 'minLength' && <p>Мінімальна довжина рядка: 5 символів</p>}
                </form>

                <ul className="js--todos-wrapper">
                    {todos.map(todoItem => (
                        <li className='todo-item' key={todoItem.id}>
                            <input type="checkbox" className="todo-cb" checked={todoItem.isCompleted ? "checked" : ''}
                                   onChange={() => dispatch(toggleTodo({ id: todoItem.id }))} />
                            <span className="todo-item__description">{todoItem.text}</span>
                            <button className="todo-item__button" onClick={() => dispatch(deleteTodo({ id: todoItem.id }))}>
                                Видалити
                            </button>
                        </li>
                    ))}
                </ul>
                {`Всего : ${todos.length}`}
            </div>
        </div>
    );
};

export default Body;