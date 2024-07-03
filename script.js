//#region Data
const form= document.querySelector('.js--form'); // форма ввода

const inTask = document.getElementById('inTask'); // Поле ввода новой задачи

const liToDo = document.querySelector('.js--todos-wrapper'); // ul для отображения

let taskArr=getToDo();  // массив задач для отображения

//#endregion

//#region Function
function getToDo() {  // загружаем из хранилища
  const tasksJSON =localStorage.getItem('tasks')

  return tasksJSON ? JSON.parse(tasksJSON) :[];
}

function setToDo(tasks){ // записываем в хранилище
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getId(){ // Генератор уникального Id
  const timestamp = Date.now();

  const randomPart= Math.floor(Math.random() * 10000);

  const randomPart2= Math.floor(Math.random() * 10000);

  return timestamp +randomPart + randomPart2;
}

function updateList(tasks) { //перерисовываем список
  liToDo.innerHTML='';
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

  const index= taskArr.findIndex(task =>task.id===id);

  if (index === -1){// проверка на случай , если задачи уже нет

    return alert('Такой задачи уже нет');

  } else {

    return index;
  }
}

function competeTask (event){

  taskArr[getIndex(event)].isCompleted=true;    // если задача помечена как выполненая , то изменить это нельзя

  setToDo(taskArr);

  updateList(taskArr);
}

function deleteTask(event){

  if(!event.target.closest('.todo-item__button'))
  {
    return ;
  }

  taskArr.splice(getIndex(event),1);

  setToDo(taskArr);

  updateList(taskArr);
}

function setTask (event) {//ввод новой задачи
  event.preventDefault();

  const task=inTask.value.trim().replace(/\s+/g ,' '); //чистка от лишних пробелов

  if (!task){
    return alert('Поле не должно быть пустым');
  }

  let newTask ={};

  newTask.id=getId();

  newTask.text=task;

  newTask.isCompleted =false; //при создании задача помечается как не выполненная

  taskArr.push(newTask);

  setToDo(taskArr);

  updateList(taskArr);

  form.reset();

}

function showTask (taskItem) { // отображение одной задачи на форме

  let newTask = document.createElement('li');

  newTask.classList.add('todo-item');

  newTask.id=taskItem.id;

  if(taskItem.isCompleted) {
    newTask.classList.add('todo-item--checked');
  }
  newTask.innerHTML=`<input type="checkbox" ${taskItem.isCompleted ? 'checked="checked"' : ''}><span class="todo-item__description" >${taskItem.text}</span><button class="todo-item__button">Видалити</button>`;
  liToDo.append(newTask);
}

//#endregion


//#region Listeners
form.addEventListener('submit',setTask);

function updateListners() {

  liToDo.addEventListener('change',competeTask);

  liToDo.addEventListener('click',deleteTask);
}

//#endregion



updateList(taskArr);






