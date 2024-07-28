export function getToDo() {  // загружаем из хранилища
    const tasksJSON =localStorage.getItem('tasks')

    return tasksJSON ? JSON.parse(tasksJSON) :[];
}

export function setToDo(tasks){ // записываем в хранилище
    localStorage.setItem('tasks',JSON.stringify(tasks));
}