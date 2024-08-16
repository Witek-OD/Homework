const inTask = $("#inTask");  // Поле ввода новой задачи
const liToDo = $(".js--todos-wrapper"); // ul для отображения
let taskArr = [];

async function getToDo() {
    const url = 'http://localhost:3000/todos';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        taskArr = await response.json();
        updateList(taskArr);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function setToDo(task) {
    const url = 'http://localhost:3000/task';
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Ошибка при добавлении задачи');
        }
        await getToDo();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function delToDo(taskId) {
    const url = `http://localhost:3000/task/${taskId}`;
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении задачи');
        }
        await getToDo();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function updToDo(task) {
    const url = `http://localhost:3000/task/${task.id}`;
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (!response.ok) {
            throw new Error('Ошибка при обновлении задачи');
        }
        await getToDo();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function getId(){ // Генератор уникального Id
    const timestamp = Date.now();

    const randomPart= Math.floor(Math.random() * 10000);

    const randomPart2= Math.floor(Math.random() * 10000);

    return timestamp +randomPart + randomPart2;
}

function setTask(event) {
    event.preventDefault();
    let task = $("#inTask").val().trim().replace(/\s+/g, ' ');
    if (!task) {
        return alert('Поле не должно быть пустым');
    }
    let newTask = { id: getId(), text: task, isCompleted: false };
    setToDo(newTask);
    $("#inTask").val('');
}

function showTask(taskItem) {
    let newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    newTask.id = taskItem.id;
    if (taskItem.isCompleted) {
        newTask.classList.add('todo-item--checked');
    }
    newTask.innerHTML = `
        <input type="checkbox" class="todo-cb" ${taskItem.isCompleted ? 'checked="checked"' : ''}>
        <span class="todo-item__description">${taskItem.text}</span>
        <button class="todo-item__button">Видалити</button>
    `;
    liToDo.append(newTask);
}

function updateList(tasks) {
    liToDo.html('');
    tasks.forEach(showTask);
    updateListners();
}

function clickTask(event) {
    event.stopPropagation();
    const taskElement = event.target.closest('.todo-item');
    const taskId = Number(taskElement.id);
    const taskIndex = taskArr.findIndex(task => task.id === taskId);

    if (event.target.classList.contains('todo-cb')) {
        taskArr[taskIndex].isCompleted = true;
        updToDo(taskArr[taskIndex]);
    } else if (event.target.classList.contains('todo-item__button')) {
        delToDo(taskId);
    }
}

$(".js--form").on('submit', setTask);

function updateListners() {
    liToDo.on('click', clickTask);
}

$(document).ready(getToDo());