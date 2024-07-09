// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

import iconCross from '../assets/images/icon-cross.svg';

//MI CÓDIGO --- HAY QU EPONERSE AL DÍA CON ESTO PERO YA

/*

const printTask = () => {
  divTasks.textContent = ' ';

  //event.preventDefault();
  allTasks.forEach(task => {
    const fragment = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    const newText = document.createElement('label');
    const newtCheck = document.createElement('input');
    newtCheck.setAttribute('type', 'checkbox');

    newText.textContent = task.tasks;

    const newIcon = document.createElement('img');
    newIcon.classList.add('taask-delete');
    newIcon.src = iconCross;

    newIcon.addEventListener('click', () => deleteTask(task.id));

    newtCheck.addEventListener('change', () => completed2(task.id));

    newDiv.append(newtCheck, newText, newIcon);
    newDiv.classList.add('task');

    inputTextElement.value = ' ';

    fragment.append(newDiv);
    divTasks.append(fragment);
  });
};

const createTask = task => {
  allTasks.push({
    id: Date.now(),
    tasks: task,
    completed: false
  });
};

const readTask = event => {
  event.preventDefault();
  if (!inputTextElement.value || inputTextElement.value === ' ') {
    return;
  } else {
    createTask(inputTextElement.value);
  }
};

const deleteTask = id => {
  allTasks = allTasks.filter(task => task.id !== id);
  printTask();
};

const checked = event => {
  event.preventDefault();
  const inputCheck = document.querySelectorAll('input[type=checkbox]');
  console.log(inputCheck);

  for (let i = 0; i < allTasks.length; i++) {
    if (inputCheck[i].checked) {
      allTasks[i].completed = true;
    }
  }
};

const removeTask = event => {
  event.preventDefault();
  checked(event);

  const newTasks = allTasks.filter(task => !task.completed);

  allTasks = newTasks;

  divTasks.textContent = ' ';
  newTasks.forEach(task => {
    const fragment = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    const newText = document.createElement('label');
    const newtCheck = document.createElement('input');
    newtCheck.setAttribute('type', 'checkbox');

    newText.textContent = task.tasks;

    newDiv.append(newtCheck, newText);
    newDiv.classList.add('task');

    inputTextElement.value = ' ';

    fragment.append(newDiv);
    divTasks.append(fragment);
  });
};

const completed = event => {
  event.preventDefault();
  checked(event);

  const completedTasks = allTasks.filter(task => task.completed);
  console.log(allTasks);

  divTasks.textContent = ' ';
  completedTasks.forEach(task => {
    const fragment = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    const newText = document.createElement('label');
    const newtCheck = document.createElement('input');
    newtCheck.setAttribute('type', 'checkbox');
    newtCheck.checked = true;
    newText.classList.add('red');
    newText.textContent = task.tasks;

    newDiv.append(newtCheck, newText);
    newDiv.classList.add('task');

    inputTextElement.value = ' ';

    fragment.append(newDiv);
    divTasks.append(fragment);
  });
  console.log(allTasks);
};

const active = event => {
  event.preventDefault();
  checked(event);

  const activeTasks = allTasks.filter(task => !task.completed);

  divTasks.textContent = ' ';
  activeTasks.forEach(task => {
    const fragment = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    const newText = document.createElement('label');
    const newtCheck = document.createElement('input');
    newtCheck.setAttribute('type', 'checkbox');

    newText.textContent = task.tasks;

    newDiv.append(newtCheck, newText);
    newDiv.classList.add('task');

    inputTextElement.value = ' ';

    fragment.append(newDiv);
    divTasks.append(fragment);
  });
};

//Correccions del codigo

const completed2 = id => {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  printTask();
};

const coutItemsLeft = () => {
  if (allTasks.length === 0) {
    taskActive.textContent = 'No tasks';
    return;
  }

  const itemsLeft = allTasks.filter(task => !task.completed).length;

  if (itemsLeft === 0) {
    taskActive.textContent = 'All tasks completed';
  } else {
    taskActive.textContent = `${itemsLeft} items left`;
  }
};

const clearTasks = () => {
  allTasks = allTasks.filter(task => !task.completed);
  printTask();
};

//formElement.addEventListener('submit', printTask);
//clearButton.addEventListener('click', removeTask);
//completedButton.addEventListener('click', removeTask);
//checkedTasks.addEventListener('click', completed);
//activeTasks.addEventListener('click', active);

formElement.addEventListener('submit', event => {
  event.preventDefault();
  if (!inputTextElement.value || inputTextElement.value === ' ') {
    return;
  } else {
    createTask(inputTextElement.value);
  }
});

*/

const formElement = document.getElementById('form');
const inputTextElement = document.getElementById('input');
const divTasks = document.getElementById('tasks');
const taskActive = document.getElementById('task-number');
const clearButton = document.getElementById('clear-btn');
const completedButton = document.getElementById('complete-btn');
const checkedTasks = document.getElementById('check-btn');
const activeButton = document.getElementById('active-btn');
const allTasksButton = document.getElementById('all')

let allTasks = [];

const countItemsLeft = () => {
  if (allTasks.length === 0) {
    taskActive.textContent = 'No tasks';
    return;
  }

  const itemsLeft = allTasks.filter(task => !task.completed).length;
  if (itemsLeft === 0) {
    taskActive.textContent = 'All tasks completed!';
  } else {
    taskActive.textContent = `${itemsLeft} items left`;
  }
};

const insertTasks = array => {
  const fragment = document.createDocumentFragment();

  array.forEach(task => {
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('task');

    const newTaskCheck = document.createElement('input');
    newTaskCheck.classList.add('task-check');
    newTaskCheck.type = 'checkbox';
    newTaskCheck.checked = task.completed;
    newTaskCheck.id = task.id;

    const newTaskText = document.createElement('label');
    newTaskText.classList.add('task-text');
    newTaskText.textContent = task.task;
    newTaskText.htmlFor = task.id;

    const newTaskDelete = document.createElement('img');
    newTaskDelete.classList.add('task-delete');
    newTaskDelete.src = iconCross;

    newTaskDelete.addEventListener('click', () => deleteTask(task.id));
    newTaskCheck.addEventListener('change', () => completeTask(task.id));

    newTaskContainer.append(newTaskCheck, newTaskText, newTaskDelete);

    fragment.append(newTaskContainer);
  });

  divTasks.textContent = '';
  divTasks.append(fragment);
  countItemsLeft();
};

const saveTask = task => {
  allTasks.push(task);
  insertTasks(allTasks);
};

const createTask = task => {
  const newTask = {
    id: Date.now(),
    task: task,
    completed: false
  };

  saveTask(newTask);
};

const deleteTask = id => {
  allTasks = allTasks.filter(task => task.id !== id);
  insertTasks(allTasks);
};

const completeTask = id => {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });

  insertTasks(allTasks);
};

const deleteAllCompletedTasks = () => {
  allTasks = allTasks.filter(task => !task.completed);
  insertTasks(allTasks);
};

const active = () => {
  const activeTasks = allTasks.filter(task => !task.completed);
  insertTasks(activeTasks);
};

const completedTask = () => {
  const tasksCompleted = allTasks.filter(task => task.completed);
  console.log(tasksCompleted);
  insertTasks(tasksCompleted);
};

insertTasks(allTasks);

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.task.value;
  if (!inputValue) return;
  createTask(inputValue);
  event.target.reset();
});

const hola = () =>{
    insertTasks(allTasks)
}

completedButton.addEventListener('click', deleteAllCompletedTasks);
activeButton.addEventListener('click', active);
checkedTasks.addEventListener('click', completedTask);
allTasksButton.addEventListener('click', hola)