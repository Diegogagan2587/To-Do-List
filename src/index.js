import './style.css';
import display from './modules/display.js';
import addTask from './modules/add_task.js';
import updateLocalStorage from './modules/update_local_sorage.js';
import toDoList from './modules/toDoList_data.js';
import upDateListeners from './modules/update_listeners.js';

display(toDoList);

upDateListeners();

const inputForNewTask = document.getElementById('add-task');

function validateIfEnter(event) {
  if (event.key === 'Enter') {
    addTask(toDoList);
    display(toDoList);
    updateLocalStorage(toDoList);
    upDateListeners();
    inputForNewTask.value = '';
  }
}

inputForNewTask.addEventListener('keydown', validateIfEnter);

export default toDoList;
