import '../css/main.css';

const form= $(".js--form"); // форма ввода

const inTask = $("#inTask");  // Поле ввода новой задачи

const liToDo = $(".js--todos-wrapper"); // ul для отображения

let taskArr=getToDo();  // массив задач для отображения

import {getToDo} from "./local_storage";

import {setToDo} from "./local_storage";

function getId(){ // Генератор уникального Id
    const timestamp = Date.now();

    const randomPart= Math.floor(Math.random() * 10000);

    const randomPart2= Math.floor(Math.random() * 10000);

    return timestamp +randomPart + randomPart2;
}

function updateList(tasks) { //перерисовываем список
    liToDo.html('');
    if(!tasks || !tasks.length) {
        return;
    }

    tasks.forEach((task) =>{
        showTask(task);
    });
    updateListners();
}

function getIndex(event) { // получение индекса в массиве по id
    const task= event.target.closest('.todo-item');

    const id=Number(task.id);

    const index = taskArr.findIndex(task =>task.id===id);

        return index;
}

function completeClick(e) {
    taskArr[getIndex(e)].isCompleted=true;    // если задача помечена как выполненая , то изменить это нельзя

    setToDo(taskArr);

    updateList(taskArr);

}

function deleteClick(e){
    taskArr.splice(getIndex(e),1);

    setToDo(taskArr);

    updateList(taskArr);
}

function modalClick(e){
    let modalDetail= $('#detailModal');

    modalDetail.html('');

    modalDetail.html(`<div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${taskArr[getIndex(e)].isCompleted ? 'Выполнено' : 'Не выполнено'}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${taskArr[getIndex(e)].text}
             </div>
             <div class="modal-footer">

                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
               
             </div>
         </div>
     </div>`);

    modalDetail.modal('show');

}

function clickTask(event){
    event.stopPropagation();

    if(event.target.closest(('.todo-item'))){ // Чекбокс , пометить как выполненую

        if(event.target.closest('.todo-cb') ) {
            completeClick(event);

        } else if (event.target.closest('.todo-item__button')){ // Кнопка удаления
            deleteClick(event);

        } else {  // Любое другое место нажатия
            modalClick(event);
        }
    }
}

function setTask (event) {//ввод новой задачи
    event.preventDefault();

    let task=$("#inTask").val().trim().replace(/\s+/g ,' '); //чистка от лишних пробелов

    if (task.length<1){
        return alert('Поле не должно быть пустым');
    }

    let newTask ={};

    newTask.id=getId();

    newTask.text=task;

    newTask.isCompleted =false; //при создании задача помечается как не выполненная

    taskArr.push(newTask);

    setToDo(taskArr);

    updateList(taskArr);

    $("#inTask").val('');

}

function showTask (taskItem) { // отображение одной задачи на форме

    let newTask = document.createElement('li');

    newTask.classList.add('todo-item');

    newTask.id=taskItem.id;

    if(taskItem.isCompleted) {
        newTask.classList.add('todo-item--checked');
    }
    newTask.innerHTML=`<input type="checkbox" class="todo-cb" ${taskItem.isCompleted ? 'checked="checked"' : ''}><span class="todo-item__description" >${taskItem.text}</span><button class="todo-item__button">Видалити</button>`;
    liToDo.append(newTask);
}

$(".js--form").on('submit',setTask);

function updateListners() {

    liToDo.on('click',clickTask);

}

$(document).ready(updateList(taskArr));
