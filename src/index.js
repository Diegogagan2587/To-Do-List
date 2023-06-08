import './style.css';
import display from './modules/display.js';
import addTask from './modules/add_task.js';
import updateLocalStorage from './modules/update_local_sorage.js';

const toDoList = [
];
display(toDoList);

/* Add task */

const inputForNewTask = document.getElementById('add-task');

function validateIfEnter(event) {
  if (event.key === 'Enter') {
    addTask(toDoList);
    display(toDoList);
    updateLocalStorage(toDoList);
    inputForNewTask.value = '';
  }
}

inputForNewTask.addEventListener('keydown', validateIfEnter);

export default toDoList;
