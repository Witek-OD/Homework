import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

// Тест 1: Проверяем, что на странице есть заголовок TODO
test('renders input field and button', () => {
    render(<TodoList />);

    // Проверяем наличие поля для ввода и кнопки
    const input = screen.getByPlaceholderText(/Введите задачу/i);
    expect(input).toBeInTheDocument();

    const button = screen.getByText(/Добавить/i);
    expect(button).toBeInTheDocument();
});

// Тест 2: Проверяем, что в поле для ввода можно ввести как цифры, так и буквы
test('allows input of both letters and numbers', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/Введите задачу/i);

    // Вводим буквы
    fireEvent.change(input, { target: { value: 'Test Task' } });
    expect(input.value).toBe('Test Task');

    // Вводим цифры
    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.value).toBe('12345');

    // Вводим и буквы и цифры
    fireEvent.change(input, { target: { value: 'Task 123' } });
    expect(input.value).toBe('Task 123');
});

// Тест 3: Проверяем, что при нажатии на кнопку "Добавить" без текста появляется ошибка
test('does not add an empty todo', () => {
    render(<TodoList />);

    const button = screen.getByText(/Добавить/i);

    // Нажимаем на кнопку, не вводя текст
    fireEvent.click(button);

    // Ожидаем, что элемент не добавится (в списке будет 0 элементов)
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
});

// Тест 4: Проверяем, что при вводе текста и нажатии на "Добавить" элемент появляется в списке
test('adds a new todo when input is provided', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/Введите задачу/i);
    const button = screen.getByText(/Добавить/i);

    // Вводим текст
    fireEvent.change(input, { target: { value: 'New Todo' } });

    // Нажимаем на кнопку "Добавить"
    fireEvent.click(button);

    // Ожидаем, что новый элемент появится в списке
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
    expect(listItems[0]).toHaveTextContent('New Todo');
});