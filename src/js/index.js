// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');
const inputTextElement = document.getElementById('input');
const divTasks = document.getElementById('tasks');
const taskActive = document.getElementById('task-number');
const clearButton = document.getElementById('clear-btn');

let allTasks = [];

const printTask = event => {
  divTasks.textContent = ' ';
  readTask(event);
  event.preventDefault();
  allTasks.forEach(task => {
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

const createTask = task => {
  allTasks.push({
    id: Date.now(),
    tasks: task,
    completed: false
  });
};

const readTask = event => {
  event.preventDefault();
  if (!inputTextElement.value) {
    return;
  } else {
    createTask(inputTextElement.value);
  }
};

const checkTask = () => {
  console.log(newtCheck.c);
};

const removeTask = event => {
  event.preventDefault();
  const inputCheck = document.querySelectorAll('input[type=checkbox]');

  for (let i = 0; i < allTasks.length; i++) {
    if (inputCheck[i].checked) {
      allTasks[i].completed = true;
    }
  }

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

formElement.addEventListener('submit', printTask);
clearButton.addEventListener('click', removeTask);

/*
const createTask = event => {
  event.preventDefault();
  const fragment = document.createDocumentFragment();

  const newDiv = document.createElement('div');
  const newText = document.createElement('span');
  const newtCheck = document.createElement('input');
  newtCheck.setAttribute('type', 'checkbox');

  newText.textContent = inputTextElement.value;
  taskCount++;

  newDiv.append(newtCheck, newText);
  newDiv.classList.add('task');

  inputTextElement.value = ' ';

  fragment.append(newDiv);
  divTasks.append(fragment);
};

formElement.addEventListener('submit', createTask);

*/
