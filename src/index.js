import './style.css';
import display from './modules/display.js';
import addTask from './modules/add_task.js';
import updateLocalStorage from './modules/update_local_sorage.js';

function Task(
  description,
  completed,
  index,
) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

const toDoList = [
  new Task(
    'clean the bathroom',
    false,
    0,
  ),
  new Task(
    'make the bed',
    true,
    1,
  ),
  new Task(
    'wash the dishes',
    false,
    2,
  ),
  new Task(
    'clean the city',
    false,
    3,
  ),
];
display(toDoList);

/* Add task */

const inputForNewTask = document.getElementById('add-task');

function validateIfEnter(event) {
  if (event.key === 'Enter') {
    addTask(toDoList);
    display(toDoList);
    updateLocalStorage(toDoList);
  }
}

inputForNewTask.addEventListener('keydown', validateIfEnter);
