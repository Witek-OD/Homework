let btnAdd=document.getElementById('addTask');

let inNewTask=document.getElementById('newTask');

let todoList= document.getElementById('toDo');

let items = document.querySelectorAll('li');

btnAdd.addEventListener('click',() => {
  if(inNewTask.value !== ''){
    addTask(inNewTask.value);
    inNewTask.value='';
  }

})

function setDefaultTask(countTask) {
  let todoList= document.getElementById('toDo');

  for (let i=1 ;i<=countTask ;i++) {

    addTask(`Задание ${i} `);
  }
}

function addTask(textTask){
  let newTask=document.createElement('li');

  newTask.innerText=textTask;

  let btnRem= document.createElement('button');

  btnRem.innerText='Удалить';

  newTask.append(btnRem);

  todoList.append(newTask);

  addListner();
}

function addListner(){

  items = document.querySelectorAll('li');

  items.forEach((task)=> {

      task.addEventListener('click', function (event) {
        this.remove();
      })

  })
}

window.onload = ()=>{
  setDefaultTask(3);
}



