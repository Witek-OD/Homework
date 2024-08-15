import React from 'react';
import '../../App.css';
import {ThemeProvider, useTheme} from "../ThemeContext";

const Body = ({ todoArr, onClick , onChange}) => {
    const {theme} = useTheme();

    return (
        <div className={theme==='light' ? 'light-theme':'dark-theme'}>
        <div className="container">
            <h1>ToDoList</h1>
            <form className="form js--form">
                <input id="inTask" type="text" name="value" required className="form__input js--form__input"/>
                <button id="addTask" className="form__btn">Додати</button>
            </form>
            <ul className="js--todos-wrapper">
                {todoArr.map(todoItem => (
                    <li className='todo-item' key={todoItem.id}>
                        <input type="checkbox" className="todo-cb" checked={todoItem.isCompleted ? "checked" : ''} onChange={()=>onChange(todoItem.id)}/>
                        <span className="todo-item__description">{todoItem.text}</span>

                        <button className="todo-item__button" onClick={() => onClick(todoItem.id)}>
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Body;